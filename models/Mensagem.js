module.exports = (sequelize, DataType) => {
    const Mensagem = sequelize.define('Mensagem', {
        id_mensagem: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nome_completo_mensagem:  DataType.STRING,
        email_mensagem:  DataType.STRING,
        conteudo_mensagem:  DataType.STRING
    }, {
        timestamps: false,
        tableName: 'mensagem'
    })

    
    return Mensagem
}