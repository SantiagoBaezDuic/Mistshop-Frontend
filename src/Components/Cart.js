import { useEffect, useState } from "react"

export default function Cart() {
    const [products, setProducts] = useState(null);

    async function test(){
        const resp = await fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart`, {
            method: `GET`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        const content = await resp.json();

        console.log(content);
    }

    useEffect(() => {
        // fetch(`${process.env.REACT_APP_DATABASE_STRING}/cart`)
        // .then((res) => res.json())
        // .then((data) => setProducts(data))
        // .catch((error) => {console.log(error)})
        test();
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