const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");


router.get("/status/:id", (req, res) => {
    crud("status",   
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
router.get("/status", (req, res) => {
    crud("status",   
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


router.post("/status", auth,admin, (req, res) => {
    crud("status",   
    
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

router.put("/status", auth,admin, (req, res) => {
        
        crud("status",   
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