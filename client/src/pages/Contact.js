import React from "react";
import { Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";
import "./style.css";


function Contact() {
    return (
            <div className="background">
                <Navigation />
                <br></br>
                <FormContact />

                {/* <p className="contactInfo">Or click here <a href="/contact" target="blank">HERE</a>
                        to view a copy of our most recent newsletter</p> */}
            </div>

    )
}

export default Contact;