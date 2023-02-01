import { Router } from 'express'
import LoginController from '../app/controllers/Login.controller'
import  UserController from "../app/controllers/User.controller"
const router = Router();

router.post("/user", UserController.create)
router.post("/login", LoginController.login)
router.get("/users",UserController.get)
export default router;
