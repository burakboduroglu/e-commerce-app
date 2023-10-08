import { NavbarWithMegaMenu } from "../components/Header";
import Category from "../components/Category";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.js";
import takeData from "../data";
import React, { useState, useEffect } from "react";


export default function CategoryPage(){
    let { categoryName } = useParams();
    
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
        <div>
            <div className="mt-3">
              <NavbarWithMegaMenu query={query} setQuery={setQuery}/>
            </div>
            <Category categoryName={categoryName}/>
            <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
              <Footer/> 
            </div>
            
        </div>
    )
}