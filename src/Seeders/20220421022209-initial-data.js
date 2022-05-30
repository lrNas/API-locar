'use strict';
// Seed para usar no Sequelize antes de iniciar
module.exports = {
  async up (queryInterface, Sequelize) {
    let now = new Date(Date.now());
    let future = new Date("2999-01-01T00:00:00.000-03:00");
    let past = new Date("2000-01-01T00:00:00.000-03:00");
    //
    await queryInterface.bulkInsert('tipo_usuarios', [
      {descricao: 'Administrador',
      createdAt: now,
      updatedAt: now},
      {descricao: 'Cliente',
      createdAt: now,
      updatedAt: now}
    ], {});
    // Senha: "senha"
    await queryInterface.bulkInsert('usuarios', [
      {        
        nome_completo: "Administrador",
        email: "admin@email.com",
        senha: "$2b$06$wlJwrKMjKu9jtoL1Lort.uCfyu5U7Qf2STBJg8MnTCKp5eShN5MwG",
        cpf: "00000000000",
        telefone: "1123320232",
        data_nascimento: past,
        cnh: "001241241241243",
        validade_cnh: future,
        fk_id_tipo_usuario: 1,
        createdAt: now,
        updatedAt: now
      }
    ], {});

    await queryInterface.bulkInsert('locations', [
      { 
        cep:"00000-000",
        logadouro:"Sem Dados",
        complemento:"Sem Dados",
        estado :"Sem Dados",
        cidade:"Sem Dados",
        fk_id_usuario:1,
        createdAt: now,
        updatedAt: now
      }
    ], {});

    await queryInterface.bulkInsert('messages', [
      { 
        nome_completo:"Mensageiro Teste",
        email:"email@teste.com",
        conteudo:"Olá mundo!",
        createdAt: now,
        updatedAt: now
      }
    ], {});

await queryInterface.bulkInsert('status_veiculos', [
  {descricao:"Disponível",
  createdAt: now,
  updatedAt: now},
  {descricao:"Em reparo",
  createdAt: now,
  updatedAt: now},
  {descricao:"Alugado",
  createdAt: now,
  updatedAt: now},
  {descricao:"Sinistro",
  createdAt: now,
  updatedAt: now},
  {descricao:"Reservado",
  createdAt: now,
  updatedAt: now}
], {});

await queryInterface.bulkInsert('locadoras', [{
nome:"Ag. 00 - UF",
email:"ag00uf@locar.com",
cnpj:"00000000000000",
telefone :"00 00000000",
createdAt: now,
updatedAt: now
}], {});

await queryInterface.bulkInsert('veiculos', [{
modelo: "VEICULO MODELO",
placa : "CAR-0E00",
km_rodados : 0,
custo_diaria : 0.1,
renavam : "00000000000",
fk_id_locadora_proprietaria : 1,
fk_id_locadora_atual : 1,
fk_id_status_veiculo : 1,
createdAt: now,
updatedAt: now
}], {});

await queryInterface.bulkInsert('reservas', [{
    fk_id_veiculo: 1,
    fk_id_usuario: 1,
    fk_id_local_retirada:1,
    fk_id_local_entrega: 1,
    data_retirada: past,
    data_entrega: future,
    valor: 11111.11,
    createdAt: now,
    updatedAt: now
}], {});


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
