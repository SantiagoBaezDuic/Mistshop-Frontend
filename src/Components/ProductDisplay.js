import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ProductCard from "./ProductCard";
import "../SCSS/productDisplay.scss";

export default function ProductDisplay() {
    const {setCatalogue} = useContext(AppContext);
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState("all")

    const getProducts = async (category) => {
        let productsURL = "";
        if(category){
            productsURL = `${process.env.REACT_APP_DATABASE_STRING}/products/category/${category}`;
        } else {
            productsURL = `${process.env.REACT_APP_DATABASE_STRING}/products`;
        }
        fetch(productsURL)
        .then(resp => resp.json())
        .then(data => {
            setData(data)
            setCatalogue(data);
        })
        .catch(err => console.error(err))
    }

    const handleFilter = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        getProducts(filter);
    }, [filter])

    return(
        <div className="prddply-container">
            <h1 className="prddply-title">Products</h1>
            <div className="prddply-filter">
                <select onChange={handleFilter} name="filter">
                    <option value="all">All</option>
                    <option value="metals">Metals</option>
                    <option value="clothing">Clothing</option>
                    <option value="weapons">Weapons</option>
                </select>
                </div>
            <div className="prddply-subcontainer">
            {data === null || data === undefined ? <p>Something went wrong</p> : data.map((obj) => {
                return (<ProductCard key={obj.code} obj={obj} />)
            })}
            </div>
        </div>
    )
}