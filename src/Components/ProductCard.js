import "../SCSS/productCard.scss";

export default function ProductCard({obj}) {
    return (
        <>
            <div key={obj.code} className="prdcrd-container">
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
            </div>
        </>
    )
}