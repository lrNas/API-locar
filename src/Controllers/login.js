//Requer UUID pra gerar identificador de token
const uuid = require("uuid")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crud = require("../Controllers/crud")
const { prototype } = require("jsonwebtoken/lib/NotBeforeError")

const login = (req, res) => {
    // Busca usuários onde usuário é = usuario
    crud("usuario",
        {
            where: { email: req.body.email }
        },
        "request"
    )
        .then(
            data => {
                // Checa se a senha bate
                if (data.length == 1 && bcrypt.compareSync(req.body.senha, data[0].senha)) {
                    let id = data[0].id;
                    // gera o uuid que será usado como token
                    let newtoken = uuid.v1();
                    /**Checa se já tem um token */
                    crud("auth", { where: { fk_id_usuario: 1 } }, "count")
                        .then(data => {
                            if (data == 1) {
                                // Deleta outros tokens ativos, desconectando de outros pcs
                                // Precisa deletar o JWT
                                crud("auth", { where: { fk_id_usuario: 1 } }, "delete")
                                    .catch(err => res.status(400).json(err))
                            }
                            // gera o novo token e armazena no bd
                            crud("auth",
                                {
                                    fk_id_usuario: id,
                                    token: newtoken
                                },
                                "create"
                            )
                                .then(data =>
                                //envia o token para o usuário (deve ser armazenado na session e enviado em todas as outras requisições)
                                {
                                    // Busca os dados do usuário que vai autenticar (Dá pra reduzir essa request)
                                    crud("usuario",
                                        {
                                            where: {
                                                id: id
                                            }
                                        },
                                        "request"
                                    )
                                        .then(
                                            data => {
                                                // Converte o resultado para Json
                                                data = JSON.parse(JSON.stringify(data))[0];
                                                // Cria uma payload para o JWT
                                                let tipo = data.fk_id_tipo_usuario; 
                                                let nomeusuario = data.nome_completo;
                                                let payload = { token: newtoken,
                                                    id: data.id, 
                                                    email:data.email,
                                                    
                                                }
                                                
                                                // Armazena os dados úteis do usuário em um JWT
                                                let token = jwt.sign(payload, "secretsupersecret")
                                                // Envia o JWT, que deve ser enviado para todas as requisições logadas
                                                res.status(200).json({tipo,token,nomeusuario})
                                            }
                                        )
                                        .catch(err => {
                                            res.status(400).json(err)
                                            // Se acontece algum erro, retorna o json de erros com o status de erro.
                                            // Tratamentos abaixo
                                        })

                                }
                                )
                                .catch(err => {
                                    res.status(400).json({ err: err, message: "Erro ao guardar token no banco de dados, contate o administrador do sistema." })
                                })
                        })
                        .catch(err => res.status(400).json({ err: err, message: "Erro ao checar autenticações, contate o administrador do sistema." }))
                }
                else {
                    res.status(400).json({ err: "Nome de usuário e/ou senha inválidos." })
                }
            })
        .catch(err => {
            res.status(400).json({ err: err, message: "Erro ao acessar base de usuários, contate o administrador do sistema." })
        })
}

module.exports = login;