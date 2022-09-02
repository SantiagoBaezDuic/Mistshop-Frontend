import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../SCSS/productDisplay.scss";

export default function ProductDisplay() {
    const [ret, setRet] = useState(null);
    const [productsURL, setProductsURL] = useState(null)

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
        {ret === null ? <p>Something went wrong</p> : ret.map((obj) => {
            return (<ProductCard key={obj.code} obj={obj} />)
        })}
        </div>
    )
}