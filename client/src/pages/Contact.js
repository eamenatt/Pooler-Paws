import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Jumbotron from "react-bootstrap/Jumbotron";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import "./style.css";
import axios from "axios";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";
import Jumbotron from "../components/Jumbotron";


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
<<<<<<< HEAD
    return (
      <div>
        <Header />
        <Navigation />
        <br></br>
        <Jumbotron>
            <h3>Contact Pooler Paws!</h3>
            <p>
                Thank you for your visiting our site and wanting to reach out. If you are interested in adopting a pet please submit a contact form below and we will get back to you soon! 
            </p>
           <ul>
               <li>Email: Admin@PoolerPaws.com</li>
               <li>Area Served: Pooler, GA and the surrounding area within 20 miles</li>
               <li>Group Admin: Karen Menatti</li>
           </ul>
        </Jumbotron>
        <ContactForm />
      </div>
    );
  }
  
  export default Contact;
=======

  return (
    <div className="background">
      <Header />
      <Navigation />
      <Jumbotron className="orangeBkg" style={{ margin: "5%" }}>
        <h1 style={{ backgroundColor: "rgb(241, 165, 66)", color: "white" }}>Contact Pooler Paws!</h1>
      </Jumbotron>
      <ContactForm />
    </div>
  );
}

export default Contact;

// static contact info

// <p style={{ color: "white" }}>
//   Thank you for your visiting our site and wanting to reach out. If you are interested in adopting a pet or helping out the best way to reach out is by our email address below.
//         </p>
//         <ul style={{ textAlign: "center", listStyle: "inside", color: "white" }}>
//           <li>Email: Admin@PoolerPaws.com</li>
//           <li>Area Served: Pooler, GA and the surrounding area within 20 miles</li>
//           <li>Group Admin: Karen Menatti</li>
//         </ul>
>>>>>>> 60ab5c4b07f028b325188334fd084b44e483fd08
