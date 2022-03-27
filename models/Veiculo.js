module.exports = (sequelize, DataType) => {
    const Veiculo = sequelize.define('Veiculo', {
        id_veiculo: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        modelo_veiculo: DataType.STRING,
        placa_veiculo: DataType.STRING,
        km_rodados_veiculo: DataType.STRING,
        custo_diaria_veiculo: DataType.FLOAT,
        renavam_veiculo: DataType.STRING,
        data_ultima_atualizacao_veiculo: DataType.DATE,
        fk_id_status: DataType.INTEGER,
        id_locadora_proprietaria: DataType.INTEGER,
        id_locadora_atual: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'veiculo'
    })

    Veiculo.associate = (modelsList) => {
        Veiculo.belongsTo(modelsList.Locadora, {
            foreignKey: "id_locadora_proprietaria"
        })
        Veiculo.belongsTo(modelsList.Locadora, {
            foreignKey: "id_locadora_atual"
        })
        Veiculo.belongsTo(modelsList.Status_Veiculo, {
            foreignKey: "fk_id_status"
        })

    }        


    return Veiculo
}