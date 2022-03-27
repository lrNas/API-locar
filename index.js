const express = require('express')
const app = express()
const consign = require('consign')

app.use(express.json())

consign()
    .include('./api')
    .then('./routes')
    .into(app)



app.listen(3000,()=>{console.log('Rodando Servidor - DHLOCAR')})