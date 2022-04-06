const Sequelize = require("sequelize")
const sequelize = require("../Controllers/connector")

const Auth = sequelize.define("auths",{
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    token:{
        type:Sequelize.STRING(50)
    }
}
, {
    sequelize,
    paranoid: true,
  }
)
    
module.exports = Auth;
