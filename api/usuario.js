const {Usuario, Cartao, Endereco, Locadora, Mensagem, Reserva, Status_Veiculo, Tipo_Usuario, Veiculo} = require('../models')
module.exports = (app) =>{
const getUsuario =  async (req, res) => {
    try {
        const users = await Usuario.findAll()
        res.status(200).json(users)
    }
    catch(err) {
        res.status(500).json({error: true, ...err})
    }
}

const createUsuario = async (req, res) => {
    const x = req.body
    console.log(req.body)
    try {
        await Usuario.create(x)
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

const deleteUsuario = async (req, res) => {
    const id = req.params.id
    try {
        await Usuario.destroy({
            where: {
                id_usuario: id
            }
        })
        res.status(200).send("Excluido")
    } catch (err) {
        res.status(500).json({error: true, ...err})
    }
}

return({getUsuario,createUsuario,deleteUsuario})
}