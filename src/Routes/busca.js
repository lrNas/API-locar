const express = require('express');
const router = express.Router();
const crud = require("../Controllers/crud");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// repetir para todas as reservas


router.post("/busca", async (req, res) => {

    let cidade_origem = `%${req.body.cidade_origem}%`
    let estado_origem = `%${req.body.estado_origem}%`
    let cidade_destino = `%${req.body.cidade_destino}%`
    let estado_destino = `%${req.body.estado_destino}%`
    let dataInicial = new Date(req.body.data_retirada)
    let dataFinal = new Date(req.body.data_entrega)

    try {
        // Todos os endereços de origem
        let enderecosOrigem = await crud("endereco",
            {
                where: {
                    [Op.or]: [
                        { estado: { [Op.like]: estado_origem } },
                        { cidade: { [Op.like]: cidade_origem } }
                    ],
                        fk_id_locadora: {
                          [Op.ne]: null
                        }
                }
                , raw: true
            }
            ,
            "request")


        // Todos os endereços de destino
        let enderecosDestino = await crud("endereco",
            {
                where: {
                    [Op.or]: [
                        { estado: { [Op.like]: estado_destino } },
                        { cidade: { [Op.like]: cidade_destino } }
                    ],
                    fk_id_locadora: {
                      [Op.ne]: null
                    }
                }, raw: true
            }
            ,
            "request")

        let idsEnderecoOrigem = enderecosOrigem.map(item => item.fk_id_locadora)
        let idsEnderecoDestino = enderecosDestino.map(item => item.fk_id_locadora)
        let partidsTodasAg = idsEnderecoDestino.concat(idsEnderecoOrigem);
        let idsTodasAg = []
        partidsTodasAg.map(id => {
            if (idsTodasAg.indexOf(id) == -1) {
                idsTodasAg.push(id)
            }
        }
        )


        let orStatement = [];
        for (id of idsEnderecoOrigem) {
            orStatement.push({ fk_id_local_retirada: id });
            orStatement.push({ fk_id_local_entrega: id });
        }


        let reservasNaData = await crud("reserva",
            {
                where: {
                    [Op.and]: [{
                        [Op.or]: [
                            { data_entrega: { [Op.between]: [dataInicial, dataFinal] } },
                            { data_retirada: { [Op.between]: [dataInicial, dataFinal] } }
                        ]
                    }, {
                        [Op.or]: orStatement
                    }]
                }, raw: true
            },
            "request"
        )

        orStatement = [];
        for (id of idsTodasAg) {
            orStatement.push({ id: id });
        }

        let infosAg = await crud("locadora",
            {
                where: {
                    [Op.or]: orStatement
                }, raw: true
            },
            "request"
        )

        let veiculos = await crud("veiculo", { raw: true }, "request");

        // lista de reservas anteriores para carros em status 5
        let reservaAnterior = []

        async function estaraOnde() {
            // pega a ultima reserva do veículo antes da data
            let reserva = await crud("reserva", { where: { fk_id_veiculo: veiculo.id, data_entrega: { [Op.lt]: dataInicial } }, order: [['data_entrega', 'DESC']], limit: 1, raw: true }, "request");
            // verifica se a ultima reserva será entregue no local de retirada que o cliente escolheu
            let indexofveiculo = idsEnderecoOrigem.indexOf(reserva[0].fk_id_local_entrega)
            if (indexofveiculo != -1) {
                // Armazena o veiculo na lista se a ultima reserva dele estiver em alguma das agências
                // que batem com a busca
                // armazena as reservas anteriores para verificar a ID futuramente.
                reservaAnterior.push(reserva[0]);
                return true;
            }
            return false;
        }

        // Lista veiculos que estão ou estarão no local de origem na data
        let veiculosFiltrados = veiculos.filter(veiculo => {
            let indexofveiculo = idsEnderecoOrigem.indexOf(veiculo.fk_id_locadora_atual);
            if (veiculo.fk_id_status_veiculo == 1 && indexofveiculo != -1) {
                return true;
            }
            if (veiculo.status == 5) {
                estaraOnde()
            }
            // Não armazena o veiculo na lista
            return false;
        })



        // Verifica quais dos veículos que estão na lista de veículos também estão na lista de reservas
        // na data e remove da lista
        let veiculosLivres = veiculosFiltrados.filter(veiculo => {
            let foiReservado = reservasNaData.find(reserva => reserva.fk_id_veiculo === veiculo.id)
            if (foiReservado) {
                return false;
            }
            return true;
        });

        let diferenca = dataFinal.getTime() - dataInicial.getTime();
        let diasTotais = Math.ceil(diferenca / (1000 * 3600 * 24));


        let card = {
            "id_veiculo": "",
            "nome_veiculo": "",
            "placa_veiculo": "",
            "ag_retirada": "",
            "endereco_retirada": "",
            "data_retirada": "",
            "ag_destino": "",
            "endereco_destino": "",
            "data_devolucao": "",
            "valor_total": ""
        };
        let cards = [];

        for (veiculo of veiculosLivres) {
            card.nome_veiculo = veiculo.modelo;
            card.id_veiculo = veiculo.id;
            card.placa_veiculo = veiculo.placa;
            custo = veiculo.custo_diaria * diasTotais
            card.valor_total = custo.toFixed(2);

            let idLocalRetirada;
            veiculo.fk_id_status_veiculo == 1 ? idLocalRetirada = veiculo.fk_id_locadora_atual : idLocalRetirada = null;
            if (!idLocalRetirada) {
                idLocalRetirada = reservaAnterior.find(reserva => reserva.fk_id_veiculo == veiculo.id);
                idLocalRetirada = idLocalRetirada[0].fk_id_local_entrega;
            }

            let rawEnderecoRetirada = enderecosOrigem.find(endereco => endereco.fk_id_locadora == idLocalRetirada);
            card.endereco_retirada = {
                "id": rawEnderecoRetirada.id,
                "cep": rawEnderecoRetirada.cep,
                "logadouro": rawEnderecoRetirada.logadouro,
                "complemento": rawEnderecoRetirada.complemento,
                "estado": rawEnderecoRetirada.estado,
                "cidade": rawEnderecoRetirada.cidade
            }
            //    Pegar nome da locadora
            let rawInfosAg = infosAg.find(ag => ag.id === idLocalRetirada);
            card.ag_retirada = {
                "id": rawInfosAg.id,
                "nome": rawInfosAg.nome,
                "email": rawInfosAg.email,
                "telefone": rawInfosAg.telefone
            }
            card.data_retirada = dataInicial;
            card.data_devolucao = dataFinal;

            for (let enderecoDestino of enderecosDestino) {
                card.endereco_destino = {
                    "id": enderecoDestino.id,
                    "cep": enderecoDestino.cep,
                    "logadouro": enderecoDestino.logadouro,
                    "complemento": enderecoDestino.complemento,
                    "estado": enderecoDestino.estado,
                    "cidade": enderecoDestino.cidade
                };

                let rawAg = infosAg.find(ag => ag.id === enderecoDestino.fk_id_locadora);
                card.ag_destino = {
                    "id": rawAg.id,
                    "nome": rawAg.nome,
                    "email": rawAg.email,
                    "telefone": rawAg.telefone
                }


                //    Pegar nome da locadora
                let pusher = JSON.parse(JSON.stringify(card));
                cards.push(pusher)
            }
        }


        res.status(200).json(cards);


    } catch (error) {
        res.status(400).json(error)
    }

});

module.exports = router