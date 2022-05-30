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

//Outro get, funciona como o acima
router.post("/usuario/todos",auth,admin, (req, res) => {
    crud("usuario",   
        {},
        "request"
    )
    .then(data=>{
        let dados = [];
        const dataJson = JSON.parse(JSON.stringify(data))
        for(item of dataJson){
            dados.push(
                {
                    "id": item.id,
                    "nome_completo": item.nome_completo,
                    "email": item.email,
                    "cpf": item.cpf,
                    "telefone": item.telefone,
                    "data_nascimento": item.data_nascimento,
                    "cnh": item.cnh,
                    "validade_cnh": item.validade_cnh,
                    "createdAt": item.createdAt,
                    "updatedAt": item.updatedAt,
                    "fk_id_tipo_usuario": item.fk_id_tipo_usuario
                  }
            )
        }

        res.status(200).json(dados)
    }
    )
    .catch(err=>
        {
            res.status(400).json(err)
        })
});

router.post("/usuario/:id",auth,(req, res) => {
    crud("usuario",   
        {
            where: {
                id: req.params.id
            }
        },
        "request"
    )
    .then(
        data=>
        {
            const dataJson = JSON.parse(JSON.stringify(data))
            const final = {
                "id": dataJson[0].id,
                "nome_completo": dataJson[0].nome_completo,
                "email": dataJson[0].email,
                "cpf": dataJson[0].cpf,
                "telefone": dataJson[0].telefone,
                "data_nascimento": dataJson[0].data_nascimento,
                "cnh": dataJson[0].cnh,
                "validade_cnh": dataJson[0].validade_cnh,
                "createdAt": dataJson[0].createdAt,
                "updatedAt": dataJson[0].updatedAt,
                "fk_id_tipo_usuario": dataJson[0].fk_id_tipo_usuario
            }

            res.status(200).json(final)
            }
        // Após executar o método crud, retorna o Status e os dados que ele retornou.
    )
    .catch(err=>
        {
            res.status(400).json(err)
        // Se acontece algum erro, retorna o json de erros com o status de erro.

        })
});
//O post também funciona como o get, mas possui mais parâmetros.
router.post("/usuario", (req, res) => {
    
    let salt=bcrypt.hashSync(req.body.senha, Math.round(Math.random()*15));

    crud("usuario",   
        {
            nome_completo: req.body.nome_completo,
            email: req.body.email,
            senha:salt ,
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