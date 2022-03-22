module.exports = (sequelize, DataType) => {
    const Tipo_Usuario = sequelize.define('Tipo_Usuario', {
        id_tipo_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        descricao: DataType.STRING
    }, {
        timestamps: false,
        tableName: 'tipo_usuario'
    })


    return Tipo_Usuario
}