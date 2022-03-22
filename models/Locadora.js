module.exports = (sequelize, DataType) => {
    const Locadora = sequelize.define('Locadora', {
        id_locadora: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nome_locadora: DataType.STRING,
        email_locadora: DataType.STRING,
        cnpj_locadora: DataType.STRING,
        telefone_locadora: DataType.STRING,
        fk_id_endereco: DataType.INTEGER,
    }, {
        timestamps: false,
        tableName: 'locadora'
    })

    
    return Locadora
}