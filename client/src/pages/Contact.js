import React from "react";
import { Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import StaticContact from "../components/StaticContact";
import Header from "../components/Header";
import "./style.css";


function Contact() {
    return (

    
            <div className="background">
                <Header />
                <Navigation />
                <br></br>
                <StaticContact />
            </div>
            
    )
}

export default Contact;