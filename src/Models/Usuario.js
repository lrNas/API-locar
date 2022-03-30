const Sequelize = require("sequelize");
const Tipo_Usuario = require("./Tipo_Usuario");
const Location = require("./Location");
const Reserva = require("./Reserva");
const Cartao = require("./CreditCard");
const sequelize = require("../Controllers/connector");

const Usuario = sequelize.define("usuario",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    nome_completo: {
        type:Sequelize.STRING(20),
    },
    email: {
        type:Sequelize.STRING(100),
    },
    senha: {
        type:Sequelize.STRING(20),
    },
    cpf: {
        type:Sequelize.STRING(20),
    },
    cpf: {
        type:Sequelize.STRING(20),
    },
    telefone: {
        type:Sequelize.STRING(20),
    }
    ,
    data_nascimento: {
        type:Sequelize.STRING(20),
    },
    cnh: {
        type:Sequelize.STRING(20),
    },
    validade_cnh: {
        type:Sequelize.STRING(20),
    }
})

    Usuario.hasOne(Location,{
        as:"Location",
        onDelete:"cascade",
        sourceKey:"id",
        allowNull:true,
        foreignKey:{name:"fk_id_usuario",field:"fk_id_usuario"}
    })
    Usuario.hasOne(Cartao,{
        as:"Cartao",
        onDelete:"cascade",
        sourceKey:"id",
        foreignKey:{name:"fk_id_usuario",field:"fk_id_usuario"}
    })
    Usuario.belongsTo(Tipo_Usuario,{
        as:"Tipo_Usuario",
        onDelete:"cascade",
        sourceKey:"id",
        foreignKey:{name:"fk_id_tipo_usuario",field:"fk_id_tipo_usuario"}
    })
    Usuario.hasMany(Reserva,{
        as:"Reserva",
        onDelete:"cascade",
        sourceKey:"id",
        foreignKey:{name:"fk_id_usuario",field:"fk_id_usuario"}
    })

module.exports = Usuario;
