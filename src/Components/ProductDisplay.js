import { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import "../SCSS/productDisplay.scss";
import { AppContext } from "../Context/AppContext";

export default function ProductDisplay() {
    const [ret, setRet] = useState(null);
    const [productsURL, setProductsURL] = useState(null);
    const {currentEmail} = useContext(AppContext);
    console.log(currentEmail)

    useEffect(() => {
        if(process.env.REACT_APP_DATABASE_STRING){
            setProductsURL(`${process.env.REACT_APP_DATABASE_STRING}/products`)
        }

        if(productsURL !== null){
            fetch(productsURL)
            .then((response) => response.json())
            .then((data) => setRet(data))
            .catch((error) => console.log(error))
        }
    }, [productsURL])
    
    return(
        <div className="prddply-container">
            <h1 className="prddply-title">Products</h1>
            <div className="prddply-subcontainer">
            {ret === null || ret === undefined ? <p>Something went wrong</p> : ret.map((obj) => {
                return (<ProductCard key={obj.code} obj={obj} />)
            })}
            </div>
        {/* <button onClick={test}>test</button> */}
        </div>
    )
}