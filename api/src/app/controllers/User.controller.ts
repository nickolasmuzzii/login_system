import { Request, Response } from "express";
import UserModel from "../models/User.entity";
import { connectionSource } from "../../ormconfig";
import CreateUserService from "../services/CreateUser.service";
import jsonwebtoken from "jsonwebtoken";
import EnderecoModel from "../models/Endereco.entity"
class UserController {

  async create(request: Request, response: Response) {
    const repository = connectionSource.getRepository(UserModel);
    const create_user = CreateUserService;
    const email = request.body["user_data"]["email"];
    const existent_user = await repository.findOne({ where: { email } });
    if (await existent_user) {
      return response
        .status(400)
        .json({"message": "Já existe um usuário com este email cadastrado."});
    }
    const user = create_user.create_user({ ...request.body });
    if (user !== null) {
      return response.status(201).json({
        "message": "Usuário criado com sucesso!"
      });
    }
    return response.status(422);
  }
  async get(request: Request, response: Response) {
    const repository = connectionSource.getRepository(UserModel);
    const endereco_repository = connectionSource.getRepository(EnderecoModel);
    const jwt = jsonwebtoken;
    const token = request.headers.authorization;
    if (token) {
      const values = jwt.verify(
        token,
        ",Hh5}]5h&h;a'v_kvKL[PTW+zy7.*@sk[8977/6*%)ZmQpn!<wNMp:E+3Q7~vkJ"
      );
      const values_dict = JSON.parse(JSON.stringify(values));
      const email = values_dict.email;
      const id = values_dict.endereco_id
      const user = await repository.findOne({ where: { email } });
      const endereco = await endereco_repository.findOne({ where: { id } });
      if (user) {
        user["password"]= ""
        return response.status(200).json({ user, endereco});
      } else {
        return response.status(403).send("Forbidden");
      }
    }
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
