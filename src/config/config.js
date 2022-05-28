require('dotenv').config()

const config = {
    username: "root",
    password:"123123",
    database: "dhlocar",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: process.env.LOGGING==="true"?true:false
}

module.exports = config;