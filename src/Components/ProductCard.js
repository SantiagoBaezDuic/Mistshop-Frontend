import "../SCSS/productCard.scss";

export default function ProductCard({obj}) {

    return (
        <>
            <div key={obj.code} className="prdcrd-container">
                <h1 className="prdcrd-name">{obj.name}</h1>
                <img height={200} src={obj.thumbnail} alt={obj.name}></img>
                <span className="prdcrd-price">Price: ${obj.price}</span>
            </div>
        </>
    )
}