import Users from "../models/Users";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs"

const salt = 10;

export const registerService = async (fullName: string, email: string, password: string) => {
    let user = await Users.findOne({ email });
    if (user) {
        console.log("User already, please choose another email!", email);
        return {
            errCode: 1,
            messgae: "User already, please choose another email!"
        };
    } else {
        const hashPassword = await bcryptjs.hash(password, salt);
        user = await Users.create({
            fullName: fullName,
            email: email,
            password: hashPassword,
        });
        const payload = {
            email: user.email,
            fullName: user.fullName,
        }
        const access_token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY as string,
            { expiresIn: "1d" }
        )
        return {
            errCode: 0,
            access_token,
            user: user
        };
    }
}
export const loginService = async (email: string, password: string) => {
    try {
        const user = await Users.findOne({ email })
        if (user) {
            // console.log(user);
            const isMatchPassword = await bcryptjs.compare(password, user.password);
            console.log(isMatchPassword);
            if (!isMatchPassword) {
                return {
                    errCode: 2,
                    message: "Email/Password not valid!"
                }
            } else {
                const payload = {
                    email: user.email,
                    fullName: user.fullName,
                }
                const access_token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET_KEY as string,
                    { expiresIn: "1d" }
                )
                return {
                    errCode: 0,
                    access_token,
                    user: {
                        email: user.email,
                        fullName: user.fullName
                    }
                };
            }
        } else {
            return {
                errorCode: 1,
                message: "Email/Password not valid!"
            }
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}