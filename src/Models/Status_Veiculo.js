const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector")

const Status_Veiculo = sequelize.define("status_veiculos",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    descricao: {
        type:Sequelize.STRING(20),
    }
}
)

module.exports = Status_Veiculo;