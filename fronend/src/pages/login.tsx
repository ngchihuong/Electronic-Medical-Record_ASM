import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/contexts/auth.context";
import { loginApi } from "../utils/api";
import { notification } from "antd";

interface IUserLogin {
    email: string;
    password: string;
}
export default function Login() {
    const navigate = useNavigate()
    const [value, setValue] = useState<IUserLogin>({ email: '', password: '' });
    const context = useContext(AuthContext)

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setValue(preveState => ({
            ...preveState,
            [key]: event.target.value
        }));

    }
    const handleSubmit = async () => {
        if (!value.email || !value.password) {
            notification.warning({
                message: "Invalid",
                description: "Plz, fill in all fields!"
            })
            return;
        }
        try {
            const response = await loginApi(value.email, value.password);
            console.log("response", response);
            if (response?.user?.errCode === 0) {
                localStorage.setItem("access_token", response?.user?.access_token)
                context?.setAuth({
                    isAuthenticated: true,
                    user: {
                        email: response?.user?.email ?? "",
                        fullName: response?.user?.fullName ?? "",
                    }
                });
                navigate("/")
                notification.success({
                    message: "Sign Up Suceess",
                    description: "Success!"
                })
            } else {
                notification.error({
                    message: "Invalid",
                    description: "Invalid email or password!"
                })
            }
        } catch (error) {
            console.log(error);
            notification.error({
                message: "Invalid",
                description: "Login failed!"
            })
        }
    }
    return (
        <>
            <div className="acontent-form">
                <div className="afull-name">
                    <label htmlFor="">Email</label> <br />
                    <input type="text" name="email" className="ainput" placeholder="Email" onChange={(event) => handleChangeInput(event, "email")} />
                    <hr />
                </div>
                <div className="afull-name">
                    <label htmlFor="">Password</label> <br />
                    <input type="password" name="password" className="ainput" placeholder="Password" onChange={(event) => handleChangeInput(event, "password")} />
                    <hr />
                </div>
                <button className="abtn-signup" onClick={handleSubmit}>Sign In</button> <br />
            </div>
        </>
    )
}