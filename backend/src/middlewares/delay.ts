import { NextFunction ,Request, Response} from "express";

export default function delay(req: Request, res: Response, next: NextFunction) {
    setTimeout(() => {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            console.log("chech token", token);
        }
        next()
    }, 1000);
}