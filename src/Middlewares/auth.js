
const crud = require("../Controllers/crud")
const auth = (req, res, next) => {
    
    crud("auth",{where:{token:req.body.token}},"request")
    .then(
        data=>{
            if(data.length==1){
                next();
                // Verificar além de se o token existe, se ele é do usuário que o enviou.
            }
            else{

                res.status(400).json({message:"Autenticador inválido."})
            }
        }
    )

}

module.exports = auth;