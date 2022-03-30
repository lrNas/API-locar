const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")


router.get("/veiculo/:id", (req, res) => {
    crud("veiculo",   
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


router.get("/veiculo", (req, res) => {
    crud("veiculo",   
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




router.post("/veiculo", (req, res) => {
    crud("veiculo",   
        {
            modelo: req.body.modelo,
            placa : req.body.placa,
            km_rodados : req.body.km_rodados,
            custo_diaria : req.body.custo_diaria,
            renavam : req.body.renavam,
            fk_id_locadora_proprietaria : req.body.id_locadora_proprietaria,
            fk_id_locadora_atual : req.body.id_locadora_atual,
            fk_id_status_veiculo: req.body.id_status_veiculo
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


router.put("/veiculo", (req, res) => {
        
        crud("veiculo",   
        [
            {
                modelo: req.body.modelo,
                placa : req.body.placa,
                km_rodados : req.body.km_rodados,
                custo_diaria : req.body.custo_diaria,
                renavam : req.body.renavam,
                fk_id_locadora_proprietaria : req.body.id_locadora_proprietaria,
                fk_id_locadora_atual : req.body.id_locadora_atual,
                fk_id_status_veiculo: req.body.id_status_veiculo
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