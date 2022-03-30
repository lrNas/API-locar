const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")


router.get("/endereco/:id", (req, res) => {
    crud("endereco",   
        {
            where: {
                id: req.params.id
            }
        },
        "request"
    )
    .then(data=>res.status(200).json(data)
    )
    .catch(err=>
        {
            res.status(400).json(err)
        })
});


router.post("/endereco", (req, res) => {
    crud("endereco",   
        {
            cep: req.body.cep,
            logadouro : req.body.logadouro,
            complemento : req.body.complemento,
            estado : req.body.estado,
            cidade : req.body.cidade,
            fk_id_locadora : req.body.id_locadora,
            fk_id_usuario :req.body.id_usuario
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

router.put("/endereco", (req, res) => {
        
        crud("endereco",   
        [
            {
                cep: req.body.cep,
                logadouro : req.body.logadouro,
                complemento : req.body.complemento,
                estado : req.body.estado,
                cidade : req.body.cidade,
                fk_id_locadora : req.body.id_locadora,
                fk_id_usuario :req.body.id_usuario
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