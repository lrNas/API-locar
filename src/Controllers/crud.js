const database = require("./connector");
const Tipo_Usuario = require("../Models/Tipo_Usuario");
const CreditCard = require("../Models/CreditCard");
const Locadora = require("../Models/Locadora");
const Location = require("../Models/Location");
const Message = require("../Models/Message");
const Reserva = require("../Models/Reserva");
const Status_Veiculo = require("../Models/Status_Veiculo");
const Usuario = require("../Models/Usuario");
const Veiculo = require("../Models/Veiculo");

const crud = async(model,values,action) =>{

    return myPromisse = new Promise((resolve,reject)=>{
        (async()=>{
            await database.sync()  
            let Model
            
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
                reject(err)
            }
        })();
    })
}

            
    module.exports = crud;