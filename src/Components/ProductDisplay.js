import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../SCSS/productDisplay.scss";

export default function ProductDisplay() {
    const [data, setData] = useState(null);

    const getProducts = async () => {
            const productsURL = `${process.env.REACT_APP_DATABASE_STRING}/products`;
            const response = await fetch(productsURL)
            const data = await response.json()
            setData(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return(
        <div className="prddply-container">
            <h1 className="prddply-title">Products</h1>
            <div className="prddply-subcontainer">
            {data === null || data === undefined ? <p>Something went wrong</p> : data.map((obj) => {
                return (<ProductCard key={obj.code} obj={obj} />)
            })}
            </div>
        </div>
    )
}