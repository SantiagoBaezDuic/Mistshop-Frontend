import "../SCSS/productCartOpt.scss";
import { useState } from "react";

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

    const sendToCart = () => {

            //         let object = {
            //         code: code,
            //         email: currentEmail,
            //         amount: count,
            //         add: true
            //     }
        
            //     const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart`, {
            //         method: `POST`,
            //         headers: {
            //             "Accept": "application/json",
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(object)
            //     })
        
            //     const content = await resp.json();

            // if(content.state !== "failure"){
                console.log(`Added ${count} units of the product with code ${code}`)
                setCount(0)
            // } else {
            //     alert(content.error)
            // }
        
            //     console.log(content);
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