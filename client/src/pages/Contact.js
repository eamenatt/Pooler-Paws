import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import StaticContact from "../components/StaticContact";
import Header from "../components/Header";
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
                <br></br>
                <StaticContact />
            </div>
            
    )
}

export default Contact;