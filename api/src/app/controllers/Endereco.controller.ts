import { Request, Response } from "express";
import { getRepository } from "typeorm";
import EnderecoModel from "../models/Endereco.entity";
import { validateEnderecoData } from "../validators/RequestsValidators";
import { connectionSource } from "../../ormconfig";
import CreateUserService from "../services/CreateUser.service"
class EnderecoController {
  async create(request: Request, response: Response) {
    const repository = connectionSource.getRepository(EnderecoModel);
    if (validateEnderecoData(request.body)) {
      const endereco = repository.create({...request.body});
      await repository.save(endereco);
      return response.status(201).send("Endereço criado com sucesso!");
    }
    return response.status(422);
  }

}
export default new EnderecoController();
