
const crud = require("../Controllers/crud")
const auth = (req, res, next) => {
    
    crud("auth",{where:{token:req.body.token}},"request")
    .then(
        data=>{
            if(data.length==1){
                req.auth = data[0].toJSON();
                console.log(req.auth)
                next();
            }
            else{
                res.status(400).json({message:"Autenticador inválido."})
            }
        }
    )

}

module.exports = auth;