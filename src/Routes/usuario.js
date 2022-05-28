// Requer o express, cria o router para essa classe
const express = require('express')
const router = express.Router()

//Requer o middleware de autenticação
const auth = require("../Middlewares/auth");

// Requer bcrypt para armazenar somente hash de senha
const bcrypt = require("bcrypt")

// Requer o controller Crud (abra-o, está comentado), para utilizar como método
const crud = require("../Controllers/crud")

// Requer o middleware admin, para verificar se o usuário tem privilégios de administrador
const admin = require("../Middlewares/admin");
//Define que a rota get vai executar o método crud com os parâmetros informados. 
// Em caso de dúvida, leia o arquivo crud em Controllers/crud para saber como ele funciona.
// os parâmetros que serão passados são obtidos na request.
router.post("/usuario/:id",auth,  (req, res) => {
    crud("usuario",   
        {
            where: {
                id: req.params.id
            }
        },
        "request"
    )
    .then(
        data=>res.status(200).json(data)
        // Após executar o método crud, retorna o Status e os dados que ele retornou.
    )
    .catch(err=>
        {
            res.status(400).json(err)
        // Se acontece algum erro, retorna o json de erros com o status de erro.

        })
});

//Outro get, funciona como o acima
router.post("/usuario/todos",auth,admin, (req, res) => {
    crud("usuario",   
        {},
        "request"
    )
    .then(data=>res.status(200).json(data)
    )
    .catch(err=>
        {
            res.status(400).json(err)
        })
});
//O post também funciona como o get, mas possui mais parâmetros.
router.post("/usuario", (req, res) => {
    crud("usuario",   
        {
            nome_completo: req.body.nome_completo,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha,Math.round(Math.random()*15)),
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento,
            cnh: req.body.cnh,
            validade_cnh: req.body.validade_cnh,
            fk_id_tipo_usuario : req.body.fk_id_tipo_usuario
        },
        "create"
    )
    .then(data=>res.status(200).json(data)
    )
    .catch(err=>
    {
        res.status(400).json(err)
    })
});

//O put também funciona como o get, mas possui mais parâmetros, e em vez de receber um objeto, recebe um array de objetos.
// o primeiro objeto desse array é o body, e o segundo é um objeto com detalhes da solicitação para o sequelize.
// Caso dúvida, busque sequelize.put na documentação do sequelize.
// O método delete é semelhante. Há uma referência em Routes/mensagem
router.put("/usuario",auth, (req, res) => {
        
        crud("usuario",   
        [
            {
                nome_completo: req.body.nome_completo,
                email: req.body.email,
                senha: bcrypt.hashSync(req.body.senha,Math.round(Math.random()*15)),
                cpf: req.body.cpf,
                telefone: req.body.telefone,
                data_nascimento: req.body.data_nascimento,
                cnh: req.body.cnh,
                validade_cnh: req.body.validade_cnh,
                fk_id_tipo_usuario : req.body.fk_id_tipo_usuario
            },
            {where: { id: req.body.id}}
        ],
        "update"
        )
        .then(data=>res.status(200).json(data)
    )
    .catch(err=>
        {
            res.status(400).json(err)
        })
    });

    


module.exports = router