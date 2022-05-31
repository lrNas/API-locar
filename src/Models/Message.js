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
        allowNull:false
    },
    email: {
        type:Sequelize.STRING(50),
        allowNull:false
    },
    conteudo: {
        type:Sequelize.STRING(200),
        allowNull:false
    }
}, {
    sequelize,
    paranoid: true,
  }
)
    
module.exports = Message;
