import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
// import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";
import axios from "axios";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";


function Contact() {
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = useState();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "/api/user/validate",
        null,
        { headers: { "x-auth-token": token } }
      );
      console.log(tokenRes.data);
      if (tokenRes.data) {
        const userRes = await axios.get(
          "/api/user",
          { headers: { "x-auth-token": token } }
        );
        dispatch({
          type: SET_CURRENT_USER,
          user: userRes.data
        });
        setUser({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="background">
      <Header />
      <Navigation />
      <Jumbotron>
            <h1>Contact Pooler Paws!</h1>
            <p>
                Thank you for your visiting our site and wanting to reach out. We have many ways to actively get involved with Pooler Paws! Contact us by filling out the form below for any of the following:  
            </p>
           <ul>
               <li>Socialize the cats and help clean at the Cat House (a great idea for middle and high school students looking for service hours)</li>
               <li>Feed once or twice a week at feral colonies nearby.</li>
               <li>Assist us with our fundraising efforts.</li>
           </ul>
           <p>
                Donation information: We are a 501(c)(3) nonprofit. All contributions are tax deductible.  
            </p>
           <ul>
               <li>Paypal  (paypal.me/poolerpaws2)</li>
               <li>Checks (made out to Pooler Paws, Inc.) Please use contact form for address to mail checks to.</li>
                <li>Cat litter.  Clumping and multi-cat type is preferred.</li>
                <li>Canned and dry cat food.  </li>
                <li>Canned and dry kitten food.</li>
                <li>Tall (13 gallon) Kitchen drawstring garbage bags.</li>  
                <li>Cleaning supplies: dish soap, multipurpose cleaners, bleach, laundry detergent
                Paper towels.</li>
                <li>XL Piddle Pads</li>
           </ul>
        </Jumbotron>
//       <ContactForm />
    </div>
  );
}

export default Contact;
