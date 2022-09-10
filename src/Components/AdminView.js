import "../SCSS/adminView.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import GoBack from "./GoBack.js";
import AdminObj from "./AdminObj";

export default function AdminView() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [code, setCode] = useState("")
    const [stock, setStock] = useState("")
    const [desc, setDesc] = useState("");
    const [productsURL, setProductsURL] = useState(null)
    const [obj, setObj] = useState(null);

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
    
            if(content.state === "failure"){
                alert(`Product load failed. ${content.error}`)
            } else {
                setObj(content.obj)
                setTimeout(() => {
                    setObj(null)
                    setName("")
                    setPrice("")
                    setThumbnail("")
                    setCode("")
                    setDesc("")
                    setStock("")
                }, 10000);
            }
        } else {
            alert("Fields empty.");
        }
    }

    return(
        <div className="admin-container">
            <Header />
            <GoBack string="/" />
            <h4 className="admin-subtitle">Load New Product</h4>
            <div className="admin-subcontainer">
                <div className="admin-inputcontainer">
                    <div className="admin-singleinput">
                        <div className="admin-inputuppertxt">
                            Name
                        </div>
                        <input value={name} onChange={handleName} type="text" placeholder="Name"/>
                    </div>
                    <div className="admin-singleinput">
                        <div className="admin-inputuppertxt">
                            Price
                        </div>
                        <input value={price} onChange={handlePrice} type="number" placeholder="Price"/>
                    </div>
                    <div className="admin-singleinput">
                        <div className="admin-inputuppertxt">
                            Image URL
                        </div>
                        <input value={thumbnail} onChange={handleThumbnail} type="text" placeholder="Thumbnail"/>
                    </div>
                    <div className="admin-singleinput">
                        <div className="admin-inputuppertxt">
                            Code
                        </div>
                        <input value={code} onChange={handleCode} type="number" placeholder="Code" />
                    </div>
                    <div className="admin-singleinput">
                        <div className="admin-inputuppertxt">
                            Description
                        </div>
                        <input value={desc} onChange={handleDescription} type="text" placeholder="Description" />
                    </div>
                    <div className="admin-singleinput">
                        <div className="admin-inputuppertxt">
                            Stock
                        </div>
                        <input value={stock} onChange={handleStock} type="number" placeholder="Stock"/>
                    </div>
                    <button onClick={sendProduct}>SUBMIT</button>
                </div>
                {obj !== null ? <AdminObj obj={obj} /> : null}
            </div>
        </div>
    )
}