const {Usuario, Cartao, Endereco, Locadora, Mensagem, Reserva, Status_Veiculo, Tipo_Usuario, Veiculo}= require('../models')
module.exports = (app) => {
    const getLocadora = async (req, res) => {
        try {
            const x = await Locadora.findAll()
            res.status(200).json(x)
        } catch (err) {
            res.status(500).json({
                error: true,
                ...err
            })
        }
    }

    const createLocadora = async (req, res) => {
        const x = req.body
        console.log(req.body)
        try {
            await Locadora.create(x)
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

    const deleteLocadora = async (req, res) => {
        const id = req.params.id
        try {
            await Locadora.destroy({
                where: {
                    id_locadora: id
                }
            })
            res.status(200).send("Excluido")
        } catch (err) {
            res.status(500).json({error: true, ...err})
        }
    }


    return {
        getLocadora,
        createLocadora,
        deleteLocadora
    }
}