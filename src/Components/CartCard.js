import "../SCSS/CartCard.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CartCard({obj}){
    const {catalogue} = useContext(AppContext);
    const [prod, setProd] = useState(undefined);

    const navigate = useNavigate();

    const deleteFromCart = async () => {
        let object = {
            code: obj.code,
            add: false,
            amount: obj.amount,
        }

        const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart`, {
            method: `POST`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(object)
        })

        const content = await resp.json();
        if(content.state === "success"){
            toast.success(' Item deleted from cart!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
            navigate("/")
        } else {
            toast.error(' Error deleting item', {
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

    useEffect(() => {
        if(catalogue !== null){
            const item = catalogue.find((el) => el.code === obj.code)
            if(item === undefined){
                console.log("Item not in catalogue.")
            } else {
                setProd(item)
            }
        }
    }, [catalogue])
    
    return (<div className="cartcard-container">
        {prod !== undefined ? <div className="cartcard-subcontainer">
            <div><img height={50} src={prod.thumbnail} alt="product"></img></div>
            <div className="cartcard-info">
                <h3>{prod.name}</h3>
                <span>{`X${obj.amount}`}</span>
            </div>
            <button onClick={deleteFromCart}>Eliminar</button>
            </div> : null}
        </div>)
}