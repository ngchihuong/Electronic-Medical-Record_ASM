import React, { useEffect, useState } from "react";
import Login from "../pages/login";
import Register from "../pages/register";
import { Link } from "react-router-dom";

export default function Login_SignUp() {
    const styleButton: React.CSSProperties = {
        border: 'none',
        padding: '0px 5px',
        outline: 'none',
        background: 'none',
        fontWeight: "550",
        fontSize: '15px',
        opacity: 0.5,
    };
    const styleButtonActive: React.CSSProperties = {
        border: 'none',
        padding: '0px 5px',
        outline: 'none',
        background: 'none',
        fontWeight: "550",
        fontSize: '15px',
        textDecoration: "underline 2px"
    };
    const [active, setActive] = useState<'signIn' | 'signUp'>("signIn");
    useEffect(() => {

    }, [active])
    return (
        <>
            <div className="acontainer">
                <div className="acontent">
                    <div className="acontent-left">
                        <div className="acontent-infor-left">
                            <p style={{ textAlign: "center", color: "white", fontSize: "a3px", fontWeight: "bold", margin: "20px" }}>MY DISCOUNTED LABS</p>
                            <div className="acontent-img"></div>
                            <p style={{ textAlign: "center", color: "white", fontSize: "a0px", fontWeight: "500", marginBottom: "40px" }}>Copyright @2024 Huong</p>
                        </div>
                    </div>
                    <div className="acontent-right">
                        <div className="acontent-infor-right">
                            <div className="aform-input">
                                <div className="asign">
                                    <span>
                                        {/* <button
                                            onClick={(e) => {
                                                setActive("signUp")
                                            }}
                                            style={active === 'signUp' ? styleButtonActive : styleButton}
                                        >Sign Up</button> */}
                                        <Link onClick={(e) => {
                                            setActive("signUp")
                                        }}
                                            style={active === 'signUp' ? styleButtonActive : styleButton} to="/login-register/register">Sign Up
                                        </Link>
                                    </span>
                                    <span>
                                        {/* <button
                                            onClick={(e) => {
                                                setActive("signIn")
                                            }}
                                            style={active === 'signIn' ? styleButtonActive : styleButton}
                                        >Sign In</button> */}
                                        <Link onClick={(e) => {
                                            setActive("signIn")
                                        }}
                                            style={active === 'signIn' ? styleButtonActive : styleButton} to="/login-register/login">Sign In
                                        </Link>
                                    </span>
                                </div>
                                {active === "signUp" ?
                                    <>
                                        <Register active={setActive} />
                                    </>
                                    :
                                    <Login />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="abg-left">
                    <div className="aleft">
                        <div className="alogo-bottom">
                        </div>
                    </div>
                </div>
                <div className="abg-right">
                    <div className="aright">
                    </div>
                </div>
            </div>
        </>
    );
}