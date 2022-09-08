import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SCSS/login.scss";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Header from "./Header";
import GoBack from "./GoBack.js";

export default function Login() {
    const {setAdmin, setLogged, setCurrentEmail} = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const emptyInputs = () => {
        if(email !== "" && password !== ""){
            return true;
        } else {
            return false;
        }
    }

    const loginAttempt = async () => {
        if(emptyInputs()){
            let object = {
                email: email,
                password: password
            }
    
            const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/login`, {
                method: `POST`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })

            const content = await resp.json();

            if(content.response.state === "success"){
                setLogged(true);
                setCurrentEmail(email);
                if(content.response.admin){
                    setAdmin(true);
                    console.log("admin");
                }
                navigate("/");
            } else {
                alert("Invalid Credentials")
            }
        } else {
            alert("Inputs empty")
        }
    }

    return(
        <div className="login-container">
            <Header />
            <GoBack string="/" />
            <div className="login-subcontainer">
                <h1 className="login-title">LOGIN</h1>
                <div className="login-inputcontainer">
                    <div className="login-inputuppertxt">
                        Email
                    </div>
                    <input onChange={handleEmail} value={email} type="email" placeholder="email" />
                    <div className="login-inputuppertxt">
                        Password
                    </div>
                    <input onChange={handlePassword} value={password} type="password" placeholder="password" />
                    <button onClick={loginAttempt}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}