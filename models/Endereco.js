module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        id_endereco: {
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
    
    Endereco.associate = (modelsList) => {
        Endereco.belongsTo(modelsList.Usuario, {
            foreignKey: "fk_id_endereco"
        })}
    
    return Endereco
}