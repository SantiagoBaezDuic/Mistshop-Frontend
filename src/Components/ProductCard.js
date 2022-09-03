import "../SCSS/productCard.scss";

export default function ProductCard({obj}) {

    return (
        <>
            <div key={obj.code} className="prdcrd-container">
                <div className="prdcrd-namecont">
                    <h2 className="prdcrd-name">{obj.name}</h2>
                    <div className="prdcrd-divider"></div>
                </div>
                <img height={200} src={obj.thumbnail} alt={obj.name}></img>
                <span className="prdcrd-price">Price: ${obj.price}</span>
            </div>
        </>
    )
}