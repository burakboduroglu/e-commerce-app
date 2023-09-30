import './css/App.css';
import Products from './components/Products';
import { useState, useEffect } from 'react';
import takeData from './data.js' ;
import Footer from "./components/Footer";
import './css/Slider.css'
import Slider from "./components/Slider";
import search from "./search";
import {NavbarWithMegaMenu} from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    takeData('tops').then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
        <NavbarWithMegaMenu />
        <div>
            <Slider />
            <Products products={products}/>
        </div>

        <Footer />

    </div>
  );
}

export default App;
