import "../SCSS/Cart.scss";
import { useEffect, useState, useContext } from "react"
import Header from "./Header";
import GoBack from "./GoBack.js";
import CartCard from "./CartCard";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart() {
    const [products, setProducts] = useState(null);
    const {cartUpdate, catalogue} = useContext(AppContext);

    const navigate = useNavigate();

    async function getCart(){
        const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart`, {
            method: `GET`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        const content = await resp.json();
        if(content[0].products.length > 0){
            setProducts(content[0].products);
        }
    }

    async function finishOrder() {
        let prodNames = []; 
        products.forEach((obj) => {
            const i = catalogue.find((el) => el.code === obj.code)
            let newItem = {
                name: i.name,
                amount: obj.amount,
                price: obj.price
            }
            prodNames.push(newItem)
        })
        const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart/buyout`, {
            method: `POST`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(prodNames),
        })

        const content = await resp.json();
        if(content.state !== `success`){
            toast.error('❗ Error submitting order', {
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
            toast('🦄 Order submitted!', {
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
        }
    }

    useEffect(() => {
        getCart();
    }, [cartUpdate])

    return(
        <div className="cart-container">
            <Header />
            <GoBack string="/" />
            <h1 className="cart-title">Your Cart</h1>
            <div className="cart-prodcont">
                {products !== null ? products.map((obj) => {
                    return(<CartCard key={obj.code} obj={obj} />)
                }) : <div className="cart-noproducts">No products in cart</div>}
            </div>
            <button onClick={finishOrder}>Confirm order</button>
        </div>
    )
}