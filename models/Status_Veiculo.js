module.exports = (sequelize, DataType) => {
    const Status_Veiculo = sequelize.define('Status_Veiculo', {
        id_status: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        descricao: DataType.STRING

    }, {
        timestamps: false,
        tableName: 'status_veiculo'
    })
    
    return Status_Veiculo

}