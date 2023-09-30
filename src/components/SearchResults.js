import Products from "./Products";
import takeData from '../data.js' ;
import { useState, useEffect } from 'react';

function SearchResults({searched}){
    const link="https://dummyjson.com/products/search?q=" + searched;
    const [products, setProducts] = useState([]);
    useEffect(() => {
     takeData(link).then((data) => setProducts(data));
     }, []);
    return(
        <div>
            <h5>Search results for "{searched}"</h5>
            {
                products.length > 0 ?  <Products products={products}/> : <h1>No results found.</h1>
            }
        </div>
        
    )
}

export default SearchResults;

