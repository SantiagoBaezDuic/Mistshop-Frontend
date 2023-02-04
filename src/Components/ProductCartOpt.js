import "../SCSS/productCartOpt.scss";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductCartOpt({code}){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if(count < 99){
            setCount(count + 1);
        }
    }

    const handleSubstract = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const sendToCart = async () => {
        if(count > 0){
            let object = {
                code: code,
                add: true,
                amount: count,
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
            console.log(content)
            setCount(0)
            toast.success(' Item added to cart!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
                });
        } else {
            toast.error(' Select an amount over 0', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
                });
        }
    } 

    return (
        <div className="prcrd-tocartcontainer">
            <div className="prdcrd-cartbuttons">
                <div onClick={handleSubstract} className="prdcrd-symbolcontainer btn">
                    <img height={25} src="./img/minus.svg" alt="minus"></img>
                </div>
                <div className="prcrd-counter">
                    {count}
                </div>
                <div onClick={handleAdd} className="prdcrd-symbolcontainer btn">
                    <img height={25} src="./img/plus.svg" alt="plus"></img>
                </div>
            </div>
            <div className="prcrd-tocart">
                <button onClick={sendToCart}>Add to cart</button>
            </div>
        </div>
    )
}