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
        allowNull:false
    },
    numero: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    validade: {
        type:Sequelize.DATE,
        allowNull:false
    },
    cvc: {
        type:Sequelize.INTEGER(4),
        allowNull:false
    }
})
    
module.exports = CreditCard;