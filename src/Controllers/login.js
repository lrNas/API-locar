//Requer UUID pra gerar identificador de token
const uuid = require("uuid")
const bcrypt = require("bcrypt")
const crud = require("../Controllers/crud")

const login = (req, res) => {
    // Busca usuários onde usuário é = usuario
    crud("usuario",   
    {
        where:{email:req.body.email}
    },
    "request"
    )
    .then(
        data=>
        {
            // Checa se a senha bate
            if(data.length==1 && bcrypt.compareSync(req.body.senha,data[0].senha)){
                let id = data[0].id;
                // gera o uuid que será usado como token
                let newtoken = uuid.v1();
                /**Checa se já tem um token */
                crud("auth", {where:{fk_id_usuario:1}},"count")
                .then(data=>{
                    if(data==1)
                    {
                        // Deleta outros tokens ativos, desconectando de outros pcs
                        crud("auth",{where:{fk_id_usuario:1}},"delete")
                        .catch(err=>res.status(400).json(err))
                    }
                    // gera o novo token e armazena no bd
                    crud("auth",   
                    {
                        fk_id_usuario:id,
                        token:newtoken
                    },
                    "create"
                    )
                    .then(data=>
                        //envia o token para o usuário (deve ser armazenado na session e enviado em todas as outras requisições)
                        res.status(200).json({token:newtoken})
                        )
                        .catch(err=>
                            {
                                res.status(400).json({err:err,message:"Erro ao guardar token no banco de dados, contate o administrador do sistema."})
                            })
                })
                .catch(err=>res.status(400).json({err:err,message:"Erro ao checar autenticações, contate o administrador do sistema."}))
            }
            else{
                res.status(400).json({err:"Nome de usuário e/ou senha inválidos."})
            }
        })
        .catch(err=>
        {
            res.status(400).json({err:err,message:"Erro ao acessar base de usuários, contate o administrador do sistema."})
        })
    }

module.exports = login;