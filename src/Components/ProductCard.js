import "../SCSS/productCard.scss";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import ProductCartOpt from "./ProductCartOpt";

export default function ProductCard({obj}) {
    const {logged} = useContext(AppContext);

    return (
        <div className="prdcrd-container">
            <div key={obj.code} className="prdcrd-subcontainer">
                <div className="prdcrd-namecont">
                    <h2 className="prdcrd-name">{obj.name}</h2>
                </div>
                <div className="prdcrd-divider"></div>
                <div>
                    <img height={200} src={obj.thumbnail} alt={obj.name}></img>
                </div>
                <div className="prdcrd-divider"></div>
                <div className="prdcrd-info">
                    <span className="prdcrd-description">{obj.description}</span>
                    <div className="prdcrd-price">Price: ${obj.price}</div>
                </div>
                {logged ? <ProductCartOpt code={obj.code}/> : null}
            </div>
        </div>
    )
}