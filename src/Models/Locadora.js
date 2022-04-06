const Sequelize = require("sequelize");
const sequelize = require("../Controllers/connector");
const Location = require("./Location");
const Reserva = require("./Reserva");
const Veiculo = require("./Veiculo");

const Locadora = sequelize.define("locadoras",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    nome: {
        type:Sequelize.STRING(20),
    },
    email: {
        type:Sequelize.STRING(50),
    },
    cnpj: {
        type:Sequelize.STRING(20),
    },
    telefone: {
        type:Sequelize.STRING(20),
    }
}, {
    sequelize,
    paranoid: true,
  }
);

Locadora.hasOne(Location,{
    as:"Location",
    onDelete:"cascade",
    sourceKey:"id",
    allowNull:true,
    foreignKey:{name:"fk_id_locadora",field:"fk_id_locadora"}
});

Locadora.hasMany(Reserva,{
    as:"LocalRetirada",
    onDelete:"cascade",
    sourceKey:"id",
    foreignKey:{name:"fk_id_local_retirada",field:"fk_id_local_retirada"}
});

Locadora.hasMany(Reserva,{
    as:"LocalEntrega",
    onDelete:"cascade",
    sourceKey:"id",
    foreignKey:{name:"fk_id_local_entrega",field:"fk_id_local_entrega"}
});

Locadora.hasMany(Veiculo,{
    as:"LocadoraProprietaria",
    onDelete:"cascade",
    sourceKey:"id",
    allowNull:true,
    foreignKey:{name:"fk_id_locadora_proprietaria",field:"fk_id_locadora_proprietaria"}
})

Locadora.hasMany(Veiculo,{
    as:"LocadoraAtual",
    onDelete:"cascade",
    sourceKey:"id",
    allowNull:true,
    foreignKey:{name:"fk_id_locadora_atual",field:"fk_id_locadora_atual"}
})

    
module.exports = Locadora;