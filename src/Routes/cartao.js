const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")


router.get("/cartao/usuario/:id", (req, res) => {
    crud("cartao",   
        {
            where: {
                fk_id_usuario: req.params.id_usuario
            }
        },"request"
    )
    .then(data=>res.status(200).json(data)
    )
    .catch(err=>
        {
            res.status(400).json(err)
        })
});

router.post("/cartao", (req, res) => {
    crud("cartao",   
    
        {
            id: req.body.id,
            nome: req.body.nome,
            numero: req.body.numero, 
            validade: req.body.validade,
            cvc: req.body.cvc,
            fk_id_usuario: req.body.id_usuario
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

router.put("/cartao", (req, res) => {
        
        crud("cartao",   
        [
            {
            nome: req.body.nome,
            numero: req.body.numero, 
            validade: req.body.validade,
            cvc: req.body.cvc,

            },
            {where: {fk_id_usuario: req.body.id}}
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