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
    

    Status_Veiculo.associate = (modelsList) => {
    Status_Veiculo.hasMany(modelsList.Veiculos, {
        foreignKey: "fk_id_status"
    })}

    
    return Status_Veiculo

}