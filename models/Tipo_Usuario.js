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

    Tipo_Usuario.associate = (modelsList) => {
        Tipo_Usuario.hasMany(modelsList.Usuario, {
            foreignKey: "fk_id_tipo_usuario"
        })
    }    
    
    return Tipo_Usuario
}