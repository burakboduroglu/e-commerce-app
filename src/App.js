import './css/App.css';
import Products from './components/Products';
import { useState, useEffect } from 'react';
import takeData from './data.js' ;
import Header from "./components/Header";
import Footer from "./components/Footer";
import './css/Slider.css'
import Slider from "./components/Slider";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    takeData().then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
        <Header />
        <div className="p-5">
            <Slider />
            <Products products={products} />
        </div>
        <Footer />

    </div>
  );
}

export default App;
