import { Request, Response } from "express";
import { connectionSource } from "../../ormconfig";
import jsonwebtoken from "jsonwebtoken";
import UserModel from "../models/User.entity";
class LoginController {
  async login(request: Request, response: Response) {
    const jwt = jsonwebtoken;
    const repository = connectionSource.getRepository(UserModel);
    const email = request.body["email"];
    const existent_user = await repository.findOne({ where: { email } });
    if (existent_user) {
      if (existent_user["password"] == request.body["password"]) {
        const token = jwt.sign(
          request.body,
          ",Hh5}]5h&h;a'v_kvKL[PTW+zy7.*@sk[8977/6*%)ZmQpn!<wNMp:E+3Q7~vkJ"
        );
        return response.json({data: token.toString()});
      }
    }
    else{
      return response.status(400).send("User Not Found")
    }
  }
}
export default new LoginController();
