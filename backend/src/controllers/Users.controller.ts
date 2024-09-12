import { Request, Response } from "express"
import { loginService, registerService } from "../services/Users.service";

export const register = async (req: Request, res: Response) => {
    try {
        let { fullName, email, password } = req.body
        let user = await registerService(fullName, email, password);
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Something went wrong" })
    }
}
export const login = async (req: Request, res: Response) => {
    try {
        let {email, password} = req.body;
        let user = await loginService(email, password);
        return res.status(200).json({user})
    } catch (error) {
        console.log(error);
        return res.status(500).json({messgae: "Something went wrong!"})
    }
}
interface IUser extends Request {
    user?: {
        email: string,
        fullName: string, 
        createdBy: string
    }
}
export const getAccount = (req: IUser, res: Response) => {
    console.log(req.user);
    
    return res.status(200).json(req.user)
}
