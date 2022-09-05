import "../SCSS/signArea.scss";
import { Link } from "react-router-dom";

export default function UnloggedOptions() {
    return(
        <div className="signarea-subcontainer">
            <Link to="/login">
                <span className="text-link">LOGIN</span>
            </Link>
            <Link to="/register">
                <span className="text-link">REGISTER</span>
            </Link>
        </div>
    )
}