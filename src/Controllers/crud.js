/* Referencia a instancia de banco de dados configurada no Controllers/connector. Abra-o para ter mais detalhes */
const database = require("./connector");

/*Referencia todos os objetos. O objeto que estará comentado será o usuário */
const Tipo_Usuario = require("../Models/Tipo_Usuario");
const CreditCard = require("../Models/CreditCard");
const Locadora = require("../Models/Locadora");
const Location = require("../Models/Location");
const Message = require("../Models/Message");
const Reserva = require("../Models/Reserva");
const Status_Veiculo = require("../Models/Status_Veiculo");
const Usuario = require("../Models/Usuario");
const Veiculo = require("../Models/Veiculo");


/** inicia o método assíncrono crud. Assincrono significa que ele espera cada finalização para fazer a próxima */
//Recebe model (string com o nome amigável do modelo a ser utilizado, o mesmo nome da rota),
//  values (json com o body ou array de json, com o body e parâmetros de update ou busca)
// e action (string descrevendo que ação será realizada com o modelo. create, request, update, delete e count)
const crud = async(model,values,action) =>{

    // Retorna uma promessa, que é resolvida a rota. Uma promessa é uma função preparada, com resposta em positiva ou negativa.
    return myPromisse = new Promise((resolve,reject)=>{
        // IIF - Instant Invoked function ("seu conteudo")(); - Forma de criar uma função async e já executar imediatamente.
        (async()=>{
            // Requisita sincronia de banco de dados com o Sequelize. faz que as tabelas sejam criadas se não houverem tabelas dos mesmos modelos.
            await database.sync();  
            // instancia uma variavel vazia, chamada modelo
            let Model
            // faz um switch na string model e seleciona qual model será trabalhado.
            switch (model){
                case "cartao":
                    Model = CreditCard;
                    break;
                case "endereco":
                    Model = Location;
                    break;
                case "locadora":
                    Model = Locadora;
                    break;
                case "mensagem":
                    Model = Message;
                    break;
                case "reserva":
                    Model = Reserva;
                    break;
                case "status":
                    Model = Status_Veiculo;
                    break;
                case "tipo":
                    Model = Tipo_Usuario;
                    break;
                case "usuario":
                    Model = Usuario;
                    break; 
                case "veiculo":
                    Model = Veiculo;
                    break;    
                default:
                    /* Tratar adequadamente */
                    reject("Modelo inválido")
            }
            try{
            // faz um switch na string action e cria a querry para o objeto.
            //Todos models são instancias de sequelize, então os métodos são nativos de Sequelize. 
            // Vide Usuario para entender mais sobre as instancias sequelize

                switch(action){
                    case "create":
                        resolve(updated = await Model.create(values))
                        break;
                    case "delete": 
                        resolve(deteled = await Model.destroy(values))
                        break;
                    case "update":
                        resolve(updated = await Model.update(...values))
                        break;
                    case "request":
                        resolve(requested = await Model.findAll(values))
                        break;
                    case "count":
                        resolve(requested = await Model.count(values))
                        break;

                }            
            }
            catch(err)
            {
                // Em caso de erro, retorna uma rejeição como erro.
                reject(err)
            }
        })();
    })
}

    //Exporta módulo crud        
    module.exports = crud;