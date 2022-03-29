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
        allowNull:false
    },
    logadouro: {
        type:Sequelize.STRING(100),
        allowNull:false
    },
    complemento:Sequelize.STRING(20),
    estado: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    cidade: {
        type:Sequelize.STRING(20),
        allowNull:false
    }
}
)
    
module.exports = Location;