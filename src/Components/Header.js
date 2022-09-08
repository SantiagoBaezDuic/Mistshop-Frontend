import { Link } from "react-router-dom";
import "../SCSS/header.scss";
import SignArea from "./SignArea";

export default function Header({ options }) {
    return(
    <div className="hdr-container">
        <div className="hdr-logo-container">
            <Link to="/">
                <img height={80} src="./img/harmony.svg" alt="logo"></img>
            </Link>
            <h1 className="hdr-title">Mistshop</h1>
        </div>
        {options ? <SignArea /> : null}
    </div>)
}