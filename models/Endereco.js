module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        cep_endereco: DataType.STRING,
        logadouro_endereco: DataType.STRING,
        complemento_endereco: DataType.STRING,
        estado_endereco: DataType.STRING,
        cidade_endereco: DataType.STRING
    }, {
        timestamps: false,
        tableName: 'endereco'
    })

    
    return Endereco
}