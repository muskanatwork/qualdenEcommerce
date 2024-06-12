import React from 'react';
import Nav from "../Home/Nav";
import NavInfo from "../About/NavInfo";
import FooterNav from "../About/FooterNav";
import Breadcrumbs from "../About/Breadcrumbs";

const Products = () => {
    return (
        <>
            <div className="container1">
                <Nav />
                <div className="box1"></div>
                <NavInfo />
                <div className="box2">
                    <div className='breadcrumbs'>
                        <div><h2>Products</h2></div>
                        <div><Breadcrumbs /></div>
                    </div>
                    <FooterNav />
                </div>
                <div className="box3"></div>
            </div>
        </>
    );
};

export default Products;
