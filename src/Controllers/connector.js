const {Sequelize} =  require("sequelize")
const config = require("../config/config.js")

//Atribui à uma nova instancia de Sequelize o JSON em config/config.json
// indicado usar .env em vez de senha no JSON
//Opções: config.development config.test ou config.production
const sequelize = new Sequelize(config)

module.exports = sequelize;