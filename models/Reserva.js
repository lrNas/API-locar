module.exports = (sequelize, DataType) => {
    const Reserva = sequelize.define('Reserva', {
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        valor_reserva: DataType.FLOAT,
        data_criacao_reserva: DataType.DATE,
        data_retirada_reserva: DataType.DATE,
	    data_entrega_reserva: DataType.DATE,
        fk_id_veiculo: DataType.INTEGER,
        fk_id_usuario: DataType.INTEGER,
        id_locadora_retirada: DataType.INTEGER,
        id_locadora_devolucao: DataType.INTEGER,
    }, {
        timestamps: false,
        tableName: 'reserva'
    })

    
    return Reserva
}