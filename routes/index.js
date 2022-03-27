module.exports = (app) =>{

    /* CRUD USUARIO */
    app.get('/usuario', app.api.usuario.getUsuario)
    app.post('/usuario', app.api.usuario.createUsuario)
    app.delete('/usuario/:id', app.api.usuario.deleteUsuario)

    /* CRUD LOCADORA */

    app.get('/locadora', app.api.locadora.getLocadora)
    app.post('/locadora', app.api.locadora.createLocadora)
    app.delete('/locadora/:id', app.api.locadora.deleteLocadora)

    /* CRUD VEICULOS */

    app.get('/veiculo', app.api.veiculo.getVeiculo)
    app.post('/veiculo', app.api.veiculo.createVeiculo)
    app.delete('/veiculo/:id', app.api.veiculo.deleteVeiculo)

}