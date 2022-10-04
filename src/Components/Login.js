import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../SCSS/login.scss";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Header from "./Header";
import GoBack from "./GoBack.js";

export default function Login() {
    const {setAdmin, setLogged} = useContext(AppContext);
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

    const loginAttempt = async (e) => {
        e.preventDefault();
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
                    <div className="login-singleinput">
                        <div className="login-inputuppertxt">
                            Email
                        </div>
                        <input onChange={handleEmail} value={email} type="email" placeholder="Email" autoFocus/>
                    </div>
                    <div className="login-singleinput">
                        <div className="login-inputuppertxt">
                            Password
                        </div>
                        <input onChange={handlePassword} value={password} type="password" placeholder="Password" />
                    </div>
                    <button onClick={loginAttempt}>LOGIN</button>
                    <span className="text-center">Don't have an account?, <Link className="text-link" to="/register">Register</Link></span>
                </div>
                {/* <form onSubmit={handleSubmit} action={`${process.env.REACT_APP_DATABASE_STRING}/login`} method="post">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" name="email" required></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" name="password" required></input>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form> */}
            </div>
        </div>
    )
}