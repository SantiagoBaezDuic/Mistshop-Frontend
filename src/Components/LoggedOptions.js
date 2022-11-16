import "../SCSS/signArea.scss";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext.js";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function LoggedOptions() {
    const { admin, setAdmin, setLogged } = useContext(AppContext);

    const navigate = useNavigate();

    const attemptLogout = async () => {
        const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/logout`, {
            method: `GET`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        const content = await resp.json();

        if(content.state === "success"){
            setAdmin(false);
            setLogged(false);
            navigate("/");
            localStorage.removeItem("token");
            toast.success(' Logout successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error(' Logout failed!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
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