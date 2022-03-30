const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector")

const Message = sequelize.define("messages",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    nome_completo: {
        type:Sequelize.STRING(50),
    },
    email: {
        type:Sequelize.STRING(50),
    },
    conteudo: {
        type:Sequelize.STRING(200),
    }
}
)
    
module.exports = Message;
