const Sequelize = require("sequelize");
const sequelize = require("../Controllers/connector");
const Reserva = require("./Reserva");
const Status_Veiculo = require("./Status_Veiculo");

const Veiculo = sequelize.define("veiculos",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    modelo: {
        type:Sequelize.STRING(20),
    },
    placa: {
        type:Sequelize.STRING(100),
    },
    km_rodados: {
        type:Sequelize.STRING(20),
    },
    custo_diaria: {
        type:Sequelize.STRING(20),
    },
    renavam: {
        type:Sequelize.STRING(20),
    }
}
);

Veiculo.hasMany(Reserva,{
    as:"Reserva",
    onDelete:"cascade",
    sourceKey:"id",
    allowNull:true,
    foreignKey:{name:"fk_id_veiculo",field:"fk_id_veiculo"}
})

Veiculo.belongsTo(Status_Veiculo,{
    as:"Status_Veiculo",
    onDelete:"cascade",
    sourceKey:"id",
    foreignKey:{name:"fk_id_status_veiculo",field:"fk_id_status_veiculo"}
})
    
module.exports = Veiculo;
