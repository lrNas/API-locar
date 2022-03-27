const {Usuario, Cartao, Endereco, Locadora, Mensagem, Reserva, Status_Veiculo, Tipo_Usuario, Veiculo}= require('../models')
module.exports = (app) => {
    const getVeiculo = async (req, res) => {
        try {
            const x = await Veiculo.findAll()
            res.status(200).json(x)
        } catch (err) {
            res.status(500).json({
                error: true,
                ...err
            })
        }
    }

    const createVeiculo = async (req, res) => {
        const x = req.body
        console.log(req.body)
        try {
            await Veiculo.create(x)
            res.status(201).json({
                msg: 'Sucesso!'
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                error: true,
                ...err
            })
        }
    }

    const deleteVeiculo = async (req, res) => {
        const id = req.params.id
        try {
            await Veiculo.destroy({
                where: {
                    id_veiculo: id
                }
            })
            res.status(200).send("Excluido")
        } catch (err) {
            res.status(500).json({error: true, ...err})
        }
    }


    return {
        getVeiculo,
        createVeiculo,
        deleteVeiculo
    }
}