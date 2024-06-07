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
                    {/* <Breadcrumbs /> */}
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
