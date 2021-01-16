import React from "react";
import { Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import "./style.css";


function Contact() {
    return (

        <body className="contact">
            <div className="background">
                <Header />
                <Navigation />
                <br></br>
                <FormContact />

                {/* <p className="contactInfo">Or click here <a href="/contact" target="blank">HERE</a>
                        to view a copy of our most recent newsletter</p> */}
            </div>
            </body>
    )
}

export default Contact;