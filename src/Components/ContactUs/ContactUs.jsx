import React from 'react';
import Nav from "../Home/Nav";
import NavInfo from "../About/NavInfo";
import FooterNav from "../About/FooterNav";
import ContactUsForm from './ContactUsForm';
import ContactUsTable from "./ContactUsTable";
import Breadcrumbs from "../About/Breadcrumbs";

const ContactUs = () => {
    return (
        <>
            <div className="container1">
                <Nav />
                <div className="box1"></div>
                <div className="box2">
                    <NavInfo />
                    <div className='breadcrumbs'>
                        <div><h2>Contact Us</h2></div>
                        <div><Breadcrumbs /></div>
                    </div>
                    <div className="contact-container">
                        <ContactUsTable />
                        <ContactUsForm />
                    </div>
                    <FooterNav />
                </div>
                <div className="box3"></div>
            </div>
        </>
    );
};

export default ContactUs;
