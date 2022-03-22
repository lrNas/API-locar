module.exports = (sequelize, DataType) => {
    const Cartao = sequelize.define('Cartao', {
        id_cartao: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nome_cartao:  DataType.STRING,
        numero_cartao:  DataType.STRING,
        validade_cartao:  DataType.DATE,
        cvc_cartao: DataType.INTEGER,
        fk_id_usuario: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'cartao'
    })

    
    return Cartao
}