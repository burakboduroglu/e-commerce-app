import React from "react";
import Footer from "../components/Footer";
import { NavbarWithMegaMenu } from "../components/Header";
import "../css/page404.css";
export default function Page404() {
	return (
		<div >
            <div className="mt-3">
                <NavbarWithMegaMenu />
            </div>
            <div className="content404">
                <h1 className="header404">404</h1>
                <h1 className="text404">Page not found</h1>
            </div>
            <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
                <Footer />
            </div>
		</div>
        
	);
}
