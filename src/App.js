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
<<<<<<< Updated upstream
    takeData('https://dummyjson.com/products/').then((data) => setProducts(data));
=======
    takeData('skincare').then((data) => setProducts(data));
>>>>>>> Stashed changes
  }, []);

  return (
    <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
        <div>
            <NavbarWithMegaMenu />
        </div>
        <div className="mt-3">
            <Slider />
        </div>
        <div className="mt-3 flex items-center justify-center">
            <h3 className="uppercase font-sans text-xl font-bold">Products</h3>
        </div>
        <div className="mt-3 flex items-center justify-center">
            <h4 className="bg-red-50 rounded">Category: <span className="uppercase font-sans font-sm font-bold">{products[0].category}</span></h4>
        </div>
        <div className="mt-3 flex items-center justify-center">

            <Products products={products}/>
            {/*<Category categoryName="sunglasses"/>*/}
            {/*<SearchResults searched={"phone"}/>*/}
        </div>
        <div className="mt-3">
            <Footer />
        </div>
    </div>
  );
}

export default App;
