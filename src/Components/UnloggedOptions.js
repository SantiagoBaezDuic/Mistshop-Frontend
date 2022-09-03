import "../SCSS/signArea.scss";
import { Link } from "react-router-dom";

export default function UnloggedOptions() {
    return(
        <div className="signarea-subcontainer">
            <Link to="/login">
                <span>LOGIN</span>
            </Link>
            <Link to="/register">
                <span>REGISTER</span>
            </Link>
        </div>
    )
}