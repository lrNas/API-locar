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
        allowNull:false
    },
    email: {
        type:Sequelize.STRING(100),
        allowNull:false
    },
    senha: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    cpf: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    cpf: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    telefone: {
        type:Sequelize.STRING(20),
        allowNull:false
    }
    ,
    data_nascimento: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    cnh: {
        type:Sequelize.STRING(20),
        allowNull:false
    },
    validade_cnh: {
        type:Sequelize.STRING(20),
        allowNull:false
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
