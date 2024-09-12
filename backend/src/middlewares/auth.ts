import jwt, { JwtPayload, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface CustomeReq extends Request {
    user?: {
        email: string,
        fullName: string,
        createdBy: string,
    }
}
export default function auth(req: CustomeReq, res: Response, next: NextFunction) {
    const white_list = ["/", "/register", "/login"]
    if (white_list.find(item => '/users' + item === req.originalUrl)) {
        next();
    } else {
        if (req?.headers?.authorization?.split("")?.[1]) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decode = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
              if (typeof decode === "object" && (decode as JwtPayload).email && (decode as JwtPayload).fullName) {
                  req.user = {
                      email: (decode as JwtPayload).email as string,
                      fullName: (decode as JwtPayload).fullName as string,
                      createdBy: 'chihuong',
                  }
              }
                next();
            } catch (error) {
                return res.status(401).json({
                    message: "Ban chua truyen access token headers!/Hoac token bi het han"
                })
            }
        } else {
            //return exceptions
            return res.status(401).json({
                message: "Ban chua truyen access token headers!/Hoac token bi het han"
            })
        }
    }
}