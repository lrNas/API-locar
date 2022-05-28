'use strict';
// Seed para usar no Sequelize antes de iniciar
module.exports = {
  async up(queryInterface, Sequelize) {
    let now = new Date(Date.now());
    let future = new Date("2999-01-01T00:00:00.000-03:00");
    let past = new Date("2000-01-01T00:00:00.000-03:00");

    // Senha: "senha"
    await queryInterface.bulkInsert('usuarios', [
      {
        nome_completo: "João da Silva",
        email: "usuario@email.com",
        senha: "$2b$06$wlJwrKMjKu9jtoL1Lort.uCfyu5U7Qf2STBJg8MnTCKp5eShN5MwG",
        cpf: "20039124023",
        telefone: "11922232304",
        data_nascimento: new Date("1990-01-01T00:00:00.000-03:00"),
        cnh: "101241241241243",
        validade_cnh: future,
        fk_id_tipo_usuario: 2,
        createdAt: now,
        updatedAt: now
      }
    ], {});

    await queryInterface.bulkInsert('locadoras', [{
      nome: "Ag. 01 SP - Consolação",
      email: "ag01@locar.com",
      cnpj: "912481240259302",
      telefone: "1151239140",
      createdAt: now,
      updatedAt: now
    },
    {
      nome: "Ag. 02 SP - Santos",
      email: "ag02@locar.com",
      cnpj: "819024839402930",
      telefone: "1154002938",
      createdAt: now,
      updatedAt: now
    },
    {
      nome: "Ag. 03 RJ - Copacabana",
      email: "ag03@locar.com",
      cnpj: "912041918524923",
      telefone: "2129543800",
      createdAt: now,
      updatedAt: now
    },
    {
      nome: "Ag. 04 MG - Três Corações",
      email: "ag04@locar.com",
      cnpj: "928459128192412",
      telefone: "3140093528",
      createdAt: now,
      updatedAt: now
    }], {});

    await queryInterface.bulkInsert('locations', [
      {
        cep: "02923-430",
        logadouro: "Rua da Glória, 500",
        complemento: "Ap 14",
        estado: "São Paulo",
        cidade: "São Paulo",
        fk_id_usuario: 2,
        createdAt: now,
        updatedAt: now
      }, {
        cep: "05823-450",
        logadouro: "Rua da Olaria, 123",
        complemento: "CJ1",
        estado: "São Paulo",
        cidade: "Santos",
        fk_id_locadora: 3,
        createdAt: now,
        updatedAt: now
      }, {
        cep: "01233-220",
        logadouro: "Rua da Graça, 453",
        complemento: "BOX 40",
        estado: "São Paulo",
        cidade: "São Paulo",
        fk_id_locadora: 2,
        createdAt: now,
        updatedAt: now
      }, {
        cep: "01023-300",
        logadouro: "Rua da Orla, 10",
        complemento: "Sala 1",
        estado: "Rio de Janeiro",
        cidade: "Rio de Janeiro",
        fk_id_locadora: 4,
        createdAt: now,
        updatedAt: now
      }, {
        cep: "01230-110",
        logadouro: "Rua do Cafezal, 123",
        complemento: "",
        estado: "Minas Gerais",
        cidade: "Três Corações",
        fk_id_locadora: 5,
        createdAt: now,
        updatedAt: now
      }
    ], {});

    await queryInterface.bulkInsert('messages', [
      {
        nome_completo: "João da Silva",
        email: "usuario@email.com",
        conteudo: "Olá, perdi o acesso à minha conta e gostaria de recuperar, poderiam me ajudar?",
        createdAt: now,
        updatedAt: now
      }
    ], {});

    await queryInterface.bulkInsert('veiculos', [{
      modelo: "Gol 2022",
      placa: "KLS-5O64",
      km_rodados: 0,
      custo_diaria: 79.99,
      renavam: "91929203874",
      fk_id_locadora_proprietaria: 5,
      fk_id_locadora_atual: 5,
      fk_id_status_veiculo: 5,
      createdAt: now,
      updatedAt: now
    },
    {
      modelo: "Uno 2020",
      placa: "MFK-3K19",
      km_rodados: 0,
      custo_diaria: 45.59,
      renavam: "99283019293",
      fk_id_locadora_proprietaria: 2,
      fk_id_locadora_atual: 2,
      fk_id_status_veiculo: 5,
      createdAt: now,
      updatedAt: now
    },
    {
      modelo: "Civic 2020",
      placa: "UNO-3K19",
      km_rodados: 0,
      custo_diaria: 86.49,
      renavam: "90292411220",
      fk_id_locadora_proprietaria: 3,
      fk_id_locadora_atual: 3,
      fk_id_status_veiculo: 5,
      createdAt: now,
      updatedAt: now
    },
    {
      modelo: "Mobi 2020",
      placa: "ORK-549O",
      km_rodados: 0,
      custo_diaria: 50.59,
      renavam: "02924119220",
      fk_id_locadora_proprietaria: 4,
      fk_id_locadora_atual: 4,
      fk_id_status_veiculo: 5,
      createdAt: now,
      updatedAt: now
    },

    {
      modelo: "Clio 2020",
      placa: "KLP-4262",
      km_rodados: 0,
      custo_diaria: 45.99,
      renavam: "03919292874",
      fk_id_locadora_proprietaria: 5,
      fk_id_locadora_atual: 4,
      fk_id_status_veiculo: 1,
      createdAt: now,
      updatedAt: now
    },
    {
      modelo: "Eco Sport 2018",
      placa: "GDK-3124",
      km_rodados: 0,
      custo_diaria: 80.59,
      renavam: "85792039410",
      fk_id_locadora_proprietaria: 2,
      fk_id_locadora_atual: 5,
      fk_id_status_veiculo: 1,
      createdAt: now,
      updatedAt: now
    },
    {
      modelo: "Doblo 2018",
      placa: "KOD-3O99",
      km_rodados: 0,
      custo_diaria: 46.49,
      renavam: "92301029813",
      fk_id_locadora_proprietaria: 3,
      fk_id_locadora_atual: 2,
      fk_id_status_veiculo: 1,
      createdAt: now,
      updatedAt: now
    },
    {
      modelo: "Focus 2020",
      placa: "WEK-124O",
      km_rodados: 0,
      custo_diaria: 50.59,
      renavam: "82932014922",
      fk_id_locadora_proprietaria: 4,
      fk_id_locadora_atual: 3,
      fk_id_status_veiculo: 1,
      createdAt: now,
      updatedAt: now
    }
    ], {});

    await queryInterface.bulkInsert('reservas', [
      {
        fk_id_veiculo: 3,
        fk_id_usuario: 2,
        fk_id_local_retirada: 3,
        fk_id_local_entrega: 3,
        data_retirada: new Date("2022-06-01T20:00:00.000-03:00"),
        data_entrega: new Date("2022-06-10T20:00:00.000-03:00"),
        valor: 2500.11,
        createdAt: now,
        updatedAt: now
      },
      {
        fk_id_veiculo: 2,
        fk_id_usuario: 2,
        fk_id_local_retirada: 2,
        fk_id_local_entrega: 2,
        data_retirada: new Date("2022-07-01T20:00:00.000-03:00"),
        data_entrega: new Date("2022-07-10T20:00:00.000-03:00"),
        valor: 1402.98,
        createdAt: now,
        updatedAt: now
      }, {
        fk_id_veiculo: 4,
        fk_id_usuario: 2,
        fk_id_local_retirada: 4,
        fk_id_local_entrega: 4,
        data_retirada: new Date("2022-08-01T20:00:00.000-03:00"),
        data_entrega:new Date( "2022-08-10T20:00:00.000-03:00"),
        valor: 2400.98,
        createdAt: now,
        updatedAt: now
      }, {
        fk_id_veiculo: 5,
        fk_id_usuario: 2,
        fk_id_local_retirada: 5,
        fk_id_local_entrega: 4,
        data_retirada: new Date("2022-09-01T20:00:00.000-03:00"),
        data_entrega: new Date("2022-09-10T20:00:00.000-03:00"),
        valor: 2600.98,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  }
  // ,
  // async down (queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // }
};
