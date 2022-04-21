const express = require("express");
const app = express();
app.use(express.json());

/* Instancia e aplica ao app o middleware requestbody, que adiciona informações necessárias no cabeçalho para trabalhar com CORS */
const requestBody = require("./src/Middlewares/requestbody");
app.use(requestBody);

/* Instancia e aplica ao app as rotas para cada controller. Vide Routes/usuario.js, essa rota estará comentada. */
const login = require("./src/Routes/login");
const endereco = require("./src/Routes/endereco");
const mensagem = require("./src/Routes/mensagem");
const veiculo = require("./src/Routes/veiculo");
const tipo = require( "./src/Routes/tipo");
const status = require( "./src/Routes/status");
const locadora = require( "./src/Routes/locadora");
const reserva = require( "./src/Routes/reserva");
const usuario = require( "./src/Routes/usuario");
app.use(login);
app.use(endereco);
app.use(mensagem);
app.use(veiculo);
app.use(tipo);
app.use(status);
app.use(locadora);
app.use(reserva);
app.use(usuario);

// const validaCnh = require("./src/Middlewares/validaCnh");
// app.use(validaCnh); Ative quando estiver pronto

/* Inicia o servidor na porta informada */
app.listen(3030, () => {
    console.log("Server em execução!");
});