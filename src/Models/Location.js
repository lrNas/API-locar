const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector")

const Location = sequelize.define("locations",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    cep: {
        type:Sequelize.STRING(20),
    },
    logadouro: {
        type:Sequelize.STRING(100),
    },
    complemento:Sequelize.STRING(20),
    estado: {
        type:Sequelize.STRING(20),
    },
    cidade: {
        type:Sequelize.STRING(20),
    }
}, {
    sequelize,
    paranoid: true,
  }
)
    
module.exports = Location;