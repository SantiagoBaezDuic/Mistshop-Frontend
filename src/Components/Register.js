import { useState } from "react";
import { Link } from "react-router-dom";
import "../SCSS/register.scss";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

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

                console.log(content);
            }
        } else {
            alert("Empty fields")
        }
    }

    return(
        <div className="register-container">
                <div className="register-inputcontainer">
                <input onChange={handleUsername} value={username} type="username" placeholder="username" />
                <input onChange={handleEmail} value={email} type="email" placeholder="email" />
                <input onChange={handlePassword} value={password} type="password" placeholder="password" />
                <button onClick={registerAttempt}>REGISTER</button>
            </div>
            <Link to="/">
                <span className="text-link">GO BACK</span>
            </Link>
        </div>
    )
}