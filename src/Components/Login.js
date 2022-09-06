import { useState } from "react";
import { Link } from "react-router-dom";
import "../SCSS/login.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    
            console.log(content);
        } else {
            alert("Inputs empty")
        }
    }

    return(
        <div className="login-container">
                <div className="login-inputcontainer">
                <input onChange={handleEmail} value={email} type="email" placeholder="email" />
                <input onChange={handlePassword} value={password} type="password" placeholder="password" />
                <button onClick={loginAttempt}>LOGIN</button>
            </div>
            <Link to="/">
                <span className="text-link">GO BACK</span>
            </Link>
        </div>
    )
}