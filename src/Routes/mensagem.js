const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");


router.get("/mensagem/:id",auth,admin, (req, res) => {
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

router.get("/mensagem",auth,admin, (req, res) => {
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
    if(req.body.email==""||req.body.nome_completo==""||req.body.conteudo==""){
        res.status(400).json(err)
    }
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

router.delete("/mensagem",auth, admin, (req, res) => {
        
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