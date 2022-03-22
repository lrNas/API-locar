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
return({getUsuario})
}