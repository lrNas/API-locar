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

    Locadora.associate = (modelsList) => {
    Locadora.hasOne(modelsList.Endereco, {
        foreignKey: "fk_id_endereco"
    })
    Locadora.hasMany(modelsList.Veiculo, {
        foreignKey: "id_locadora_proprietaria"
    })
    Locadora.hasMany(modelsList.Veiculo, {
        foreignKey: "id_locadora_atual"
    })
    Locadora.belongsToMany(modelsList.Veiculo, {
        through: modelsList.Reserva,
        foreignKey: "id_locadora_retirada",
        timestamps: false
    })
    Locadora.belongsToMany(modelsList.Veiculo, {
        through: modelsList.Reserva,
        foreignKey: "id_locadora_devolucao",
        timestamps: false
    })
    }

    
    return Locadora
}