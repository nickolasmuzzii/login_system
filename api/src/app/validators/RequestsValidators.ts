import { EnderecoType } from "../@types/Endereco.type"
import { UserType } from "../@types/User.type";

 export function validateUserData(user:UserType) {
    if(typeof(user.nome) !== "string"){
      return false
    }
    if(typeof(user.email) !== "string"){
      return false
    }
    if(typeof(user.password) !== "string"){
      return false
    }
    if(typeof(user.data_nascimento) !== "string"){
      return false
    }
    return true
  }
  export function validateEnderecoData(endereco:EnderecoType) {
    if(typeof(endereco.cep) !== "string"){
      return false
    }
    if(typeof(endereco.rua) !== "string"){
      return false
    }
    if(typeof(endereco.cidade) !== "string"){
      return false
    }
    if(typeof(endereco.estado) !== "string"){
      return false
    }
    return true
  }
