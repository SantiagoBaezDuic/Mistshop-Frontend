import Header from './Header';
import ProductDisplay from './ProductDisplay';
import Footer from "./Footer";
import "../SCSS/App.scss";

export default function Main(){
    return(
        <div className='main-container'>
            <Header options={true}/>
            <ProductDisplay />
            <Footer />
        </div>
    )
}