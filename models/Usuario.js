module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        fk_id_tipo_usuario: DataType.INTEGER,
        nome_completo_usuario: DataType.STRING,
        email_usuario: DataType.STRING,
        senha_usuario: DataType.STRING,
        cpf_usuario: DataType.STRING,
        telefone_usuario: DataType.STRING,
        data_nascimento_usuario: DataType.DATE,
        validade_cnh_usuario: DataType.DATE,
        fk_id_endereco: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'usuario'
    })

    Usuario.associate = (modelsList) => {
        Usuario.belongsTo(modelsList.Tipo_Usuario, {
            foreignKey: "fk_id_tipo_usuario"
        })
        Usuario.hasMany(modelsList.Endereco, {
            foreignKey: "fk_id_endereco"
        })
        Usuario.hasMany(modelsList.Cartao, {
            foreignKey: "fk_id_usuario"
        })

    }        

    
    return Usuario
}