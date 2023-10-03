import Products from "./Products";
import takeDataFromURL from '../dataFromURL' ;
import { useState, useEffect } from 'react';

function Category({categoryName}){
    const link="https://dummyjson.com/products/category/"+categoryName;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        takeDataFromURL(link)
        .then((products) => setProducts(products));
    }, []);

    //async sorunu var, urunler sayfada F5 attıktan sonra gorunuyor
    return(        
        <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8 mb-3">
            <div className="mt-3 flex items-center justify-center">
                <h3 className="uppercase font-sans text-xl font-bold">{categoryName}</h3>
            </div>
            <div className="mt-3 flex items-center justify-center">
                {
                    products.length > 0 ?  <Products products={products}/> : <h1>No products listed for this category.</h1>
                }
            </div>
        </div>
    )
}

export default Category;

