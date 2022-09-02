import "../SCSS/header.scss";

export default function Header() {
    return(<div className="hdr-container">
        <div className="hdr-logo-container">
            <img height={100} src="./img/harmony.svg" alt="logo"></img>
            <h1 className="hdr-title">Mistshop</h1>
        </div>
    </div>)
}