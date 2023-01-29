import { connectionSource } from "../../ormconfig";
import EnderecoModel from "../models/Endereco.entity";
import UserModel from "../models/User.entity";
import {
  validateEnderecoData,
  validateUserData,
} from "../validators/RequestsValidators";

export class CreateUserService {
  endereco_repository = connectionSource.getRepository(EnderecoModel);
  user_repository = connectionSource.getRepository(UserModel);

  public async create_user(data: any) {
    const { endereco_data, user_data } = data;

    if (validateEnderecoData(endereco_data)) {
      const endereco_obj = this.endereco_repository.create({
        ...endereco_data,
      });
      await this.endereco_repository
        .save(endereco_obj)
        .then(async (res: any) => {
          user_data["endereco_id"] = res["id"];
          if (validateUserData(user_data)) {
            const user_object = this.user_repository.create({ ...user_data });
            await this.user_repository.save(user_object).then((res) => {
              return res;
            });
          }
        });
    }
    return null;
  }
}

export default new CreateUserService();
