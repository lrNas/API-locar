const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector")

const Reserva = sequelize.define("reservas",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    valor: {
        type:Sequelize.DECIMAL(20),
        allowNull:false
    },
    data_retirada: {
        type:Sequelize.DATE,
        allowNull:false
    },
    data_entrega: {
        type:Sequelize.DATE,
        allowNull:false
    }
}
)

module.exports = Reserva;
