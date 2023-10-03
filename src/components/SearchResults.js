import Products from "./Products";
import takeData from '../data.js' ;
import { useState, useEffect } from 'react';

function SearchResults({searched, products}){
    return(
        <div>
            <h5>Search results for "{searched}"</h5>
            {
                products.length == 0 ? <h1>No results found.</h1> : <h1> </h1>
            }
        </div>
        
    )
}

export default SearchResults;

