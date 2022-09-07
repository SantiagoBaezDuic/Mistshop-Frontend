import "../SCSS/signArea.scss";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext.js";
import { useContext } from "react";

export default function LoggedOptions() {
    const { admin, setAdmin, setLogged } = useContext(AppContext);

    const navigate = useNavigate();

    const attemptLogout = async () => {
        let resp = null;

        await fetch(`${process.env.REACT_APP_DATABASE_STRING}/logout`)
        .then((res) => res.json())
        .then((data) => resp = data)
        .catch(error => console.log(error))

        if(resp.state === "success"){
            setAdmin(false);
            setLogged(false);
            navigate("/");
        } else {
            alert("Logout failed.")
        }
    }

    return(
        <div className="signarea-subcontainer">
            {admin ? <Link to="/admin"><span className="text-link">ADMIN</span></Link> : null}
            <Link to="/cart">
                <span className="text-link">CART</span>
            </Link>
            <Link to="/">
                <span onClick={attemptLogout} className="text-link">LOGOUT</span>
            </Link>
        </div>
    )
}