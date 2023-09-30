import './css/App.css';
import Products from './components/Products';
import { useState, useEffect } from 'react';
import takeData from './data.js' ;
import Footer from "./components/Footer";
import './css/Slider.css'
import Slider from "./components/Slider";
import search from "./search";
import {NavbarWithMegaMenu} from "./components/Header";
import Category from "./components/Category";
import SearchResults from "./components/SearchResults";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    takeData('https://dummyjson.com/products/').then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
        <NavbarWithMegaMenu />
        <div>
            <Slider />
            <Products products={products}/>
            {/*<Category categoryName="sunglasses"/>*/}
            {/*<SearchResults searched={"phone"}/>*/}
        </div>

        <Footer />

    </div>
  );
}

export default App;
