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
            <NavbarWithMegaMenu query={query} setQuery={setQuery}/>
            <Category categoryName={categoryName}/>
            <Footer/> 
        </div>
    )
}