import express from "express"
import { login, register, getAccount } from "../controllers/Users.controller";
import auth from "../middlewares/auth";
import delay from "../middlewares/delay";

const router = express.Router();

router.all("*", auth)
router.post('/register', register)
router.post('/login', login)
router.get("/account", delay, getAccount)


export default router;