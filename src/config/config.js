require('dotenv').config()

const config = {

    username: process.env.DBUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTADDRESS,
    dialect: "mysql",
    logging: process.env.LOGGING==="true"?true:false
}

module.exports = config;