import "../SCSS/adminObj.scss";

export default function AdminObj({obj}) {
    return (
        <>
            <div className="admin-success">Success!</div>
            <div className="admin-objectcontainer">
                <h2>Product loaded:</h2>
                <h3>{obj.name}</h3>
                <img height={200} alt="prod img" src={obj.thumbnail}></img>
                <p>{obj.description}</p>
                <h4>Price: ${obj.price}</h4>
                <h4>Code: {obj.code}</h4>
                <h4>Stock: {obj.stock}</h4>
                <h4>Type: {obj.type}</h4>
            </div>
        </>
    )
}