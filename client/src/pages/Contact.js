import React from "react";
import { Col, Row, Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";
import "./style.css";


function Contact() {
    return (

        <div>
            <Header />
            <Navigation />
            <br></br>
            <FormContact />
            <br></br>
            <div className="footer">
                <ContactCard />
        </div>
        </div>

      
      

    )
}

export default Contact;