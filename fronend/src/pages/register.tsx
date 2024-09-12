import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { createUserApi } from "../utils/api";
import { notification } from "antd";
import { AuthContext } from "../components/contexts/auth.context";

interface IUserRegister {
    email: string;
    password: string;
    fullName: string,
}
export default function Register(active: any | string) {
    const navigate = useNavigate();
    const context = useContext(AuthContext)
    const [value, setValue] = useState<IUserRegister>({
        email: '',
        password: '',
        fullName: '',
    })
    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setValue(prevState => ({
            ...prevState,
            [id]: event.target.value
        }))
    }
    const handleSubmit = async () => {
        if (!value.email || !value.fullName || !value.password) {
            notification.warning({
                message: "Invalid",
                description: "Plz, fill in all fields!"
            })
            return;
        }
        try {
            const response = await createUserApi(value.fullName, value.email, value.password,);
            console.log("register res", response);
            if (response && response.user.errCode === 0) {
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
            } else if (response.user.errCode === 1) {
                notification.error({
                    message: "Sign Up Error",
                    description: "Email already exists!"
                });
            } else {
                notification.error({
                    message: "Unknown Error",
                    description: response.user.message || "Something went wrong!"
                });
            }
        } catch (error) {
            console.log(error);
            notification.error({
                message: "Invalid",
                description: "Log Out!"
            })
        }
    }
    return (
        <>
            <div className="acontent-form">
                <div className="afull-name">
                    <label htmlFor="">Full Name</label> <br />
                    <input type="text" name="fullName" className="ainput" onChange={(event) => handleOnChangeInput(event, "fullName")} placeholder="Full Name" />
                    <hr />
                </div>
                <div className="afull-name">
                    <label htmlFor="">Email</label> <br />
                    <input type="email" name="email" className="ainput" onChange={(event) => handleOnChangeInput(event, "email")} placeholder="Email" />
                    <hr />
                </div>
                <div className="afull-name">
                    <label htmlFor="">Password</label> <br />
                    <input type="password" name="password" className="ainput" onChange={(event) => handleOnChangeInput(event, "password")} placeholder="Password" />
                    <hr />
                </div>
                <button className="abtn-signup"
                    onClick={() => {
                        handleSubmit()
                    }}
                >Sign Up</button> <br />
                <Link to="/login" className="ahref"
                    onClick={(e) => {
                        active.setActive("signIn"),
                            e.preventDefault()
                    }}
                >I have an Account?
                </Link>
            </div>
        </>
    )
}