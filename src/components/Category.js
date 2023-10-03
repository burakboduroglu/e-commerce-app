import Products from "./Products";
import takeData from '../data.js' ;
import { useState, useEffect } from 'react';

function Category({categoryName}){
    const link="https://dummyjson.com/products/category/"+categoryName;
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch(link)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    //async sorunu var, urunler sayfada F5 attıktan sonra gorunuyor
    return(
        <div>
            <h5>Products for "{categoryName}"</h5>
            <p>Category link "{link}"</p>
            {
            products.length > 0 ?  <Products products={products}/> : <h1>No products listed for this category.</h1>
            }
        </div>
        
    )
}

export default Category;

