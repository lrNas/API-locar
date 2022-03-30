const express = require("express");
const requestBody = require("./src/Middlewares/requestbody");
const validaCnh = require("./src/Middlewares/validaCnh");
const app = express();
const endereco = require("./src/Routes/endereco");
const mensagem = require("./src/Routes/mensagem");
const tipo = require( "./src/Routes/tipo");
const status = require( "./src/Routes/status");
const locadora = require( "./src/Routes/locadora");
const reserva = require( "./src/Routes/reserva");

app.use(requestBody);
app.use(validaCnh);
app.use(express.json());
app.use(tipo);
app.use(endereco);
app.use(mensagem);
app.use(status);
app.use(locadora);
app.use(reserva);

app.listen(3030, () => {
    console.log("Server em execução!");
});