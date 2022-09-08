import { Link } from "react-router-dom"
import "../SCSS/App.scss";

export default function GoBack({ string }) {
    return (
        <div className="goback-container">
            <img height={30} src="./img/arrowleft.svg" alt="arrow" />
            <Link to={string}>
                    <span className="text-link">GO BACK</span>
            </Link>
        </div>
    )
}