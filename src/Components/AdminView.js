import "../SCSS/adminView.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import GoBack from "./GoBack.js";

export default function AdminView() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [code, setCode] = useState("")
    const [stock, setStock] = useState("")
    const [desc, setDesc] = useState("");
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

    const handleDescription = (e) => {
        setDesc(e.target.value)
    }

    const sendProduct = async () => {
        if(name !== "" && price !== "" && thumbnail !== "" && code !== "" && desc !== "" && stock !== ""){
            let object = {
                name: name,
                price: price,
                thumbnail: thumbnail,
                code: code,
                description: desc,
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
        } else {
            alert("Fields empty.");
        }
    }

    return(
        <div className="admin-container">
            <Header />
            <GoBack string="/" />
            <div className="admin-subcontainer">
                <h1 className="admin-title">ADMIN</h1>
                <h2 className="admin-subtitle">Load New Product</h2>
                <div className="admin-inputcontainer">
                    <div className="admin-inputuppertxt">
                        Name
                    </div>
                    <input value={name} onChange={handleName} type="text" placeholder="name"/>
                    <div className="admin-inputuppertxt">
                        Price
                    </div>
                    <input value={price} onChange={handlePrice} type="number" placeholder="price"/>
                    <div className="admin-inputuppertxt">
                        Image URL
                    </div>
                    <input value={thumbnail} onChange={handleThumbnail} type="text" placeholder="thumbnail"/>
                    <div className="admin-inputuppertxt">
                        Code
                    </div>
                    <input value={code} onChange={handleCode} type="number" placeholder="code" />
                    <div className="admin-inputuppertxt">
                        Description
                    </div>
                    <input value={desc} onChange={handleDescription} type="text" placeholder="description" />
                    <div className="admin-inputuppertxt">
                        Stock
                    </div>
                    <input value={stock} onChange={handleStock} type="number" placeholder="stock"/>
                    <button onClick={sendProduct}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}