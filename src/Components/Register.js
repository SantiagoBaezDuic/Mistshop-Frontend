import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../SCSS/register.scss";
import Header from "./Header.js";
import GoBack from "./GoBack.js";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const emailValidation = () => {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

        if(emailRegex.test(email)){
            return true;
        } else {
            alert("Ingrese un email válido");
            return false;
        }
    }

    const emptyInputs = () => {
        if(email !== "" && password !== "" && username !== ""){
            return true;
        } else {
            return false;
        }
    }

    const registerAttempt = async () => {
        if(emptyInputs()) {
            if(emailValidation() === false){
                alert("Invalid email")
            } else {
                let object = {
                    username: username,
                    email: email,
                    password: password,
                }
        
                const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/register`, {
                    method: `POST`,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(object)
                })

                const content = await resp.json();

                if(content.state === "success"){
                    console.log("Register successful");
                    navigate("/login");
                } else if (content.state === "failure") {
                    console.log("Email already in use");
                }
            }
        } else {
            alert("Empty fields")
        }
    }

    return(
        <div className="register-container">
            <Header />
            <GoBack string="/" />
            <div className="register-subcontainer">
                <h1 className="register-title">REGISTER</h1>
                <div className="register-inputcontainer">
                    <div className="register-singleinput">
                        <div className="register-inputuppertxt">
                            <span>Username</span>
                        </div>
                        <input onChange={handleUsername} value={username} type="username" placeholder="Username" autoFocus/>
                    </div>
                    <div className="register-singleinput">
                        <div className="register-inputuppertxt">
                            <span>Email</span>
                        </div>
                        <input onChange={handleEmail} value={email} type="email" placeholder="Email" />
                    </div>
                    <div className="register-singleinput">
                        <div className="register-inputuppertxt">
                            <span>Password</span>
                        </div>
                        <input onChange={handlePassword} value={password} type="password" placeholder="Password" />
                    </div>
                    <button onClick={registerAttempt}>REGISTER</button>
                    <span className="text-center">Already have an account?, <Link className="text-link" to="/login">Sign up</Link></span>
                </div>
            </div>
        </div>
    )
}