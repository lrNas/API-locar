const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")

router.get("/usuario/:id", (req, res) => {
    crud("usuario",   
        {
            where: {
                id: req.params.id
            }
        },
        "usuario"
    )
    .then(data=>res.status(200).json(data)
    )
    .catch(err=>
        {
            res.status(400).json(err)
        })
});

router.get("/usuario", (req, res) => {
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

router.post("/usuario", (req, res) => {
    crud("usuario",   
        {
            nome_completo: req.body.nome_completo,
            email: req.body.email,
            senha: req.body.senha,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento,
            cnh: req.body.cnh,
            validade_cnh: req.body.validade_cnh,
            fk_id_tipo_usuario : req.body.id_tipo_usuario
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


router.put("/usuario", (req, res) => {
        
        crud("usuario",   
        [
            {
                nome_completo: req.body.nome_completo,
                email: req.body.email,
                senha: req.body.senha,
                cpf: req.body.cpf,
                telefone: req.body.telefone,
                data_nascimento: req.body.data_nascimento,
                cnh: req.body.cnh,
                validade_cnh: req.body.validade_cnh,
                fk_id_tipo_usuario : req.body.id_tipo_usuario
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