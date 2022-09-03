import "../SCSS/signArea.scss";
import { Link } from "react-router-dom";

export default function LoggedOptions() {
    return(
        <div className="signarea-subcontainer">
            <Link to="/cart">
                <span>CART</span>
            </Link>
            <Link to="/">
                <span>LOGOUT</span>
            </Link>
        </div>
    )
}