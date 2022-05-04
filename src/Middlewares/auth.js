
const jwt = require("jsonwebtoken")
const crud = require("../Controllers/crud")
const auth = (req, res, next) => {
    try{
        let token = jwt.verify(req.body.token,"secretsupersecret");
        let auth = token.token;
       crud("auth",{where:{token:auth}},"request")
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
    catch (error) {
        res.status(400).json({message:"Token inválido."})
    }
        
        

}

module.exports = auth;