// Importa o sequelize para verificar valor de itens
const Sequelize = require("sequelize");

// Importa todas as classes que essa se relaciona
const Tipo_Usuario = require("./Tipo_Usuario");
const Location = require("./Location");
const Reserva = require("./Reserva");
const Cartao = require("./CreditCard");

//importa o conector, que é o banco de dados onde todas as ações serão realizadas.
const sequelize = require("../Controllers/connector");


//define o objeto usuario como uma instância da tabela usuários (linha de uma tabela) 
const Usuario = sequelize.define("usuarios",{
    /**cada propriedade é um campo da tabela, e recebe as propriedades do campo em um json. Tente possuir um plugin de sequelize
     * e apertar ctrl + espaço, vai aparecer as propriedades possíveis.
     */
    id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    nome_completo: {
        type:Sequelize.STRING(20),
    },
    email: {
        type:Sequelize.STRING(100),
    },
    senha: {
        type:Sequelize.STRING(20),
    },
    cpf: {
        type:Sequelize.STRING(20),
    },
    telefone: {
        type:Sequelize.STRING(20),
    }
    ,
    data_nascimento: {
        type:Sequelize.DATE,
        allowNull:false
    },
    cnh: {
        type:Sequelize.STRING(20),
    },
    validade_cnh: {
        type:Sequelize.DATE,
        allowNull:false
    }
})
/**Relacionamentos Sequelize */
// A tabela que possui os relacionamentos (Usuario.hasOne) sempre é a tabela source.
// A sourceKey é o campo onde o sequelize vai extrair a opção para colocar como chave estrangeira
// A chave estrangeira é o campo na tabela alvo que vai receber o dado da source key, pra indicar a referência
// Has one ou Has many representa que um usuário possui um ou vários objetos. Ex: Usuário tem um endereço. Usuário tem várias reservas.
// Ao deletar um usuário, tudo que pertence à ele é deletado.
    Usuario.hasOne(Location,{
        as:"Location",
        onDelete:"cascade",
        sourceKey:"id",
        allowNull:true,
        foreignKey:{name:"fk_id_usuario",field:"fk_id_usuario"}
    })
    Usuario.hasOne(Cartao,{
        as:"Cartao",
        onDelete:"cascade",
        sourceKey:"id",
        foreignKey:{name:"fk_id_usuario",field:"fk_id_usuario"}
    })

// No caso da belongs to, a tabela que vai receber a chave é a tabela alvo.
// Referencia que o objeto pertence à um conjunto ou a um objeto.
// ex: Carro pertence à motorista, Motorista pertence à grupo de motoristas (nesse caso, usuário pertence ao grupo "tipo usuarios")
// Ao deletar um usuário, tudo à que ele pertence é mantido. 
// Ou seja, se ele pertence à um grupo de usuários, o grupo é mantido ao ser apagado.
// Vide teoria de conjuntos.
    Usuario.belongsTo(Tipo_Usuario,{
        as:"Tipo_Usuario",
        onDelete:"cascade",
        sourceKey:"id",
        foreignKey:{name:"fk_id_tipo_usuario",field:"fk_id_tipo_usuario"}
    })
    Usuario.hasMany(Reserva,{
        as:"Reserva",
        onDelete:"cascade",
        sourceKey:"id",
        foreignKey:{name:"fk_id_usuario",field:"fk_id_usuario"}
    })

module.exports = Usuario;
