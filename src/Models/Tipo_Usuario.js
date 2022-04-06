const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector");

const Tipo_Usuario = sequelize.define("tipo_usuarios",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    descricao: {
        type:Sequelize.STRING(100),
        allowNull:false
    }
}, {
    sequelize,
    paranoid: true,
  })

module.exports = Tipo_Usuario;