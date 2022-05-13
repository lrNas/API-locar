const express = require('express');
const router = express.Router();
const crud = require("../Controllers/crud");
const Sequelize = require("sequelize");
const Veiculo = require('../Models/Veiculo');
const Op = Sequelize.Op;

// repetir para todas as reservas


router.get("/busca", async (req, res) => {

    let cidade_origem = `%${req.body.cidade_origem}%`
    let estado_origem = `%${req.body.estado_origem}%`
    let dataInicial = new Date(req.body.data_retirada)
    let dataFinal = new Date(req.body.data_entrega)

    try {
        let enderecos = await crud("endereco",
        {
            where: {
                [Op.or]: [
                    {estado:{[Op.like]: estado_origem}},
                    {cidade: {[Op.like]: cidade_origem}}
                ]
            }
        }
        ,
        "request")

        let ids = enderecos.map(item=>item.fk_id_locadora);
        
        let idList =[];
        for (id of ids){
            idList.push({fk_id_local_retirada:id});
            idList.push({fk_id_local_entrega:id});
        }
        let reservas = await crud("reserva",   
            {
                where: { 
                    [Op.and]:[{
                        [Op.or]:[
                            {data_entrega:{[Op.between]: [dataInicial, dataFinal]}},
                            {data_retirada:{[Op.between]: [dataInicial, dataFinal]}}
                        ]},{   
                            [Op.or]: idList 
                        }]
                }, raw:true
            },
            "request"
        )

        let veiculos = await crud("veiculo",{raw:true},"request");
        let veiculosFiltrados = veiculos.filter(async veiculo=>{
            let indexofveiculo = ids.indexOf(veiculo.fk_id_locadora_atual);
            if(veiculo.status==1 && indexofveiculo>-1){
                    return true;
                }
                if(veiculo.status==5){
                
                let reserva = await crud("reserva",{where:{fk_id_veiculo:veiculo.id},order:[['data_entrega','DESC']],limit:1,raw:true},"request");
                let indexofveiculo = ids.indexOf(reserva[0].fk_id_local_entrega)
                if(indexofveiculo>-1){
                    return true;
                }
                return false;
            }
            return false;
        })

            if(reservas.length===0){
            // Retornar lista de veiculos com o local pesquisado como origem e destino, e datas.
            res.status(200).json(veiculosFiltrados);
            }
            veiculosFiltrados = veiculosFiltrados.filter(veiculo=>{
                let result =true
                reservas.map(reserva=>{
                    if(veiculo.id ==reserva.fk_id_veiculo) result=false;
                })
                return result;
            })
            // Mudar essa apresentação
            res.status(200).json(veiculosFiltrados);

        
    } catch (error) {
        res.status(400).json(error)
    }

});

module.exports = router