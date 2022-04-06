const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector")

const CreditCard = sequelize.define("creditcards",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    nome: {
        type:Sequelize.STRING(50),
    },
    numero: {
        type:Sequelize.STRING(20),
    },
    validade: {
        type:Sequelize.DATE,
    },
    cvc: {
        type:Sequelize.INTEGER(4),
    }
}, {
    sequelize,
    paranoid: true,
  })
    
module.exports = CreditCard;