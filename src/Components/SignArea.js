import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import UnloggedOptions from "./UnloggedOptions";
import LoggedOptions from "./LoggedOptions";

export default function SignArea() {
    const {logged} = useContext(AppContext);

    return(
        <div>
            {logged ? <LoggedOptions /> : <UnloggedOptions />}
        </div>
    )
}