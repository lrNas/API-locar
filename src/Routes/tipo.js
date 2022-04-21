const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")
const auth = require("../Middlewares/auth");


router.get("/tipo/:id", (req, res) => {
    crud("tipo",   
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


router.post("/tipo",auth, (req, res) => {
    crud("tipo",   
    
        {
            descricao: req.body.descricao,
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

router.put("/tipo",auth, (req, res) => {
        
        crud("tipo",   
        [
            {
            descricao:req.body.descricao

            },
            {where: {id: req.body.id}}
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