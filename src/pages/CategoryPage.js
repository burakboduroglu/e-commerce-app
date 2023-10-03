import React, { useState } from "react";
import { NavbarWithMegaMenu } from "../components/Header";
import Category from "../components/Category";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.js";
export default function CategoryPage(){
    let { categoryName } = useParams();
    return (
        <div>
            <NavbarWithMegaMenu/>
            <Category categoryName={categoryName}/>
            <Footer/> 
        </div>
    )
}