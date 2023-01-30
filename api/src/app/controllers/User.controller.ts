import { Request, Response } from "express";
import UserModel from "../models/User.entity";
import { connectionSource } from "../../ormconfig";
import CreateUserService from "../services/CreateUser.service"
class UserController {
  async create(request: Request, response: Response) {
    const create_user = CreateUserService
    const repository = connectionSource.getRepository(UserModel);
      const email  = request.body["user_data"]["email"];
      const existent_user = await repository.findOne({ where: { email } })
      if (await existent_user) {
        return response
          .status(400)
          .send("Já existe um usuário com este email cadastrado.");
      }
      const user = create_user.create_user({ ...request.body });
      if(user !== null){
        return response.status(201).send("Usuário criado com sucesso!");
      }
    return response.status(422);
  }
}
export default new UserController();

//query format
// {
//   "user_data": {
//   "nome": "Nickolas Muzzi",
//   "email": "nickolasmuzzi@gmail.com",
//   "data_nascimento": "2002-11-04",
//   "password": "N04112002n."
//   },
//   "endereco_data": {
//       "cep": "31230270",
//       "rua": "Antonio guerra",
//       "cidade":"Belo Horizonte",
//       "estado":"Minas Gerais"
//   }

// }
