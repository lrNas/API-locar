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
    },
    data_retirada: {
        type:Sequelize.DATE,
    },
    data_entrega: {
        type:Sequelize.DATE,
    }
}, {
    sequelize,
    paranoid: true,
  }
)

module.exports = Reserva;
