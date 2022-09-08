import { useEffect, useState } from "react"

export default function Cart() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => {console.log(error)})
    }, [])

    return(
        <div>
            <div>
                {products !== null ? products.map((obj) => {
                    return(
                        <div>{obj.code}</div>
                    )
                }) : "No products in cart"}
            </div>
        </div>
    )
}