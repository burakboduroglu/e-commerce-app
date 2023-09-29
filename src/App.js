import './css/App.css';
import Products from './components/Products';
import { useState, useEffect } from 'react';
import takeData from './data.js' ;
import Header from "./components/Header";
import Footer from "./components/Footer";
import './css/Header.css'
import './css/Header.css'
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
      <Slider />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;
