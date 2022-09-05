import "../SCSS/signArea.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext.js";
import { useContext } from "react";

export default function LoggedOptions() {
    const { admin } = useContext(AppContext);

    return(
        <div className="signarea-subcontainer">
            {admin ? <Link to="/admin">ADMIN</Link> : null}
            <Link to="/cart">
                <span className="text-link">CART</span>
            </Link>
            <Link to="/">
                <span className="text-link">LOGOUT</span>
            </Link>
        </div>
    )
}