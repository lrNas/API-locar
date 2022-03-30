const express = require('express')
const router = express.Router()
const crud = require("../Controllers/crud")

router.get("/voto/count", (req, res) => {
       
    crud("voto",
        {},
    "count"
    )
    .then(data=>res.status(200).json(data)
)
.catch(err=>
    {
        res.status(400).json(err)
    })
});
router.get("/voto/count/:id", (req, res) => {
        
    crud("voto",   

        {where:{idOption:req.params.id}}
        ,
    "count"
    )
    .then(data=>res.status(200).json(data)
)
.catch(err=>
    {
        res.status(400).json(err)
    })
});


router.get("/voto/count/enq/:id", (req, res) => {
        
    crud("voto",   

        {where:{idEnquete:req.params.id}}
        ,
    "count"
    )
    .then(data=>res.status(200).json(data)
)
.catch(err=>
    {
        res.status(400).json(err)
    })
});




router.get("/voto/:id", (req, res) => {
    crud("voto",   
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

router.get("/voto/enq/:id", (req, res) => {
    crud("voto",   
        {
            where: {
                idEnquete: req.params.id
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

router.get("/voto/opt/:id", (req, res) => {
    crud("voto",   
        {
            where: {
                idOption: req.params.id
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


router.get("/voto", (req, res) => {
    crud("voto",   
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

router.post("/voto", (req, res) => {
    crud("voto",   
        {
            idOption:req.body.idOption,
            idEnquete:req.body.idEnquete
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

router.put("/voto", (req, res) => {
        
        crud("voto",   
        [
            {
                idOption:req.body.idOption,
                idEnquete:req.body.idEnquete
            },
            {where: { id: req.body.idVoto }}
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

router.delete("/voto", (req, res) => {
        
        crud("voto",   
        
            {
                where: { id: req.body.idVoto }
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