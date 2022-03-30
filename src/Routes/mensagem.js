const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")


router.get("/mensagem/:id", (req, res) => {
    crud("mensagem",   
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

router.get("/mensagem", (req, res) => {
    crud("mensagem",   
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

router.post("/mensagem", (req, res) => {
    crud("mensagem",   
        {
            nome_completo: req.body.nome_completo,
            email: req.body.email, 
            conteudo: req.body.conteudo
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
// O método delete recebe somente o parãmetro where

router.delete("/mensagem", (req, res) => {
        
    crud("mensagem",   
    
        {
            where: { id: req.body.id }
        }
        ,
    "delete"
    )
    .then(data=>res.status(200).json(data)
)
.catch(err=>
    {
        res.status(400).json(err)
    })
});




module.exports = router