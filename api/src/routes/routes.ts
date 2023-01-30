import { Router } from 'express'
import  UserController from "../app/controllers/User.controller"
const router = Router();

router.post("/user", UserController.create)

export default router;
