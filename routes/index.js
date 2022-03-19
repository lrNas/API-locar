module.exports = (app) =>{
    app.get('/usuario', app.api.usuario.getUsuario)
}