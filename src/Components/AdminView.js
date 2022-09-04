import "../SCSS/adminView.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminView() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [code, setCode] = useState("")
    const [stock, setStock] = useState("")
    const [productsURL, setProductsURL] = useState(null)

    useEffect(() => {
        if(process.env.REACT_APP_DATABASE_STRING){
            setProductsURL(`${process.env.REACT_APP_DATABASE_STRING}/products`)
        }
    }, [])

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleThumbnail = (e) => {
        setThumbnail(e.target.value)
    }

    const handleCode = (e) => {
        setCode(e.target.value)
    }

    const handleStock = (e) => {
        setStock(e.target.value)
    }

    const sendProduct = async () => {

        let object = {
            name: name,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }

        const resp = await fetch(productsURL, {
            method: `POST`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })

        const content = await resp.json();

        console.log(content)
    }

    return(
        <div className="admin-container">
            <div className="admin-inputcontainer">
                <input value={name} onChange={handleName} type="text" placeholder="name"/>
                <input value={price} onChange={handlePrice} type="number" placeholder="price"/>
                <input value={thumbnail} onChange={handleThumbnail} type="text" placeholder="thumbnail"/>
                <input value={code} onChange={handleCode} type="text" placeholder="code" />
                <input value={stock} onChange={handleStock} type="text" placeholder="stock"/>
                <button onClick={sendProduct}>SUBMIT</button>
                <Link to="/">GO BACK</Link>
            </div>
        </div>
    )
}