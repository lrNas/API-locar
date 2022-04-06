const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")
const auth = require("../Middlewares/auth");

router.get("/reserva/usuario/:id",auth, (req, res) => {
    crud("reserva",   
        {
            where: {
                fk_id_usuario: req.params.id
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


router.get("/reserva/:id",auth, (req, res) => {
    crud("reserva",   
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
router.get("/reserva", (req, res) => {
    crud("reserva",   
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


router.post("/reserva",auth, (req, res) => {
    crud("reserva",
        {
            fk_id_veiculo: req.body.id_veiculo,
            fk_id_usuario: req.body.id_usuario,
            fk_id_locadora_retirada: req.body.id_locadora_retirada,
            fk_id_locadora_entrega: req.body.id_locadora_entrega,
            data_retirada: req.body.data_retirada,
            data_entrega: req.body.data_entrega,
            valor: req.body.valor
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

router.put("/reserva",auth, (req, res) => {
        
        crud("reserva",   
        [
            {
                fk_id_veiculo: req.body.descricao,
                fk_id_usuario: req.body.descricao,
                fk_id_locadora_retirada: req.body.descricao,
                fk_id_locadora_entrega: req.body.descricao,
                data_retirada: req.body.descricao,
                data_entrega: req.body.descricao,
                valor: req.body.descricao
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