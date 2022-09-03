import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import UnloggedOptions from "./UnloggedOptions";
import LoggedOptions from "./LoggedOptions";
import "../SCSS/signArea.scss";

export default function SignArea() {
    const {logged} = useContext(AppContext);

    return(
        <div className="signarea-container">
            {logged ? <LoggedOptions /> : <UnloggedOptions />}
        </div>
    )
}