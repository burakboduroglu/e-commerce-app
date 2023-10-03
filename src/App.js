import "./css/App.css";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import takeData from "./data.js";
import Footer from "./components/Footer";
import "./css/Slider.css";
import Slider from "./components/Slider";
import { NavbarWithMegaMenu } from "./components/Header";
import SearchResults from "./components/SearchResults";
import './css/login.css';
import './css/signup.css';

function App() {
  const [products, setProducts] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    takeData(query).then((data) => setProducts(data));
  }, [query]);

  const handleSubmit = (query) => {
    console.log(query);
    takeData(query).then((data) => setProducts(data));
  };

  return (
    <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
      <div className="sticky top-3 z-10">
        <NavbarWithMegaMenu query={query} setQuery={setQuery} />
      </div>
      <div className="mt-3">
        <Slider />
      </div>
      <div className="mt-3 flex items-center justify-center">
        <h3 className="uppercase font-sans text-xl font-bold">Products</h3>
      </div>
      <div className="mt-3 flex items-center justify-center">
        <h4 className="rounded">
          <span className="pl-1 capitalize font-sans font-sm font-bold text-cyan-800">
            {query!=""
              ? <SearchResults searched={query} products={products}/>
              : "All Products"}
          </span>
        </h4>
      </div>
      <div className="mt-3 flex items-center justify-center">
        {products?.length > 0 && <Products products={products} />}
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
