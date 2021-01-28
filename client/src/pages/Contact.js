import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import "./style.css";


function Contact() {
    return (
      <div>
        <Header />
        <Navigation />
        <br></br>
        <ContactForm />
      </div>
    );
  }
  
  export default Contact;