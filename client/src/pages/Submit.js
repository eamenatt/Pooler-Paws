import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../components/Navigation";
import SubmitForm from "../components/SubmitForm";
import SignIn from "../components/SignIn"
import Header from "../components/Header";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";


function Submit() {
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

  if (state.currentUser._id !== 0) {
    return (
      <div>
        <Header />
        <Navigation />
        <Jumbotron className="contact-jumbotron">
          <h1 className="headline">Know an animal who needs a home?</h1>
          <h3 className="headline">Input their information below to add them to our listing!</h3>
        </Jumbotron>
        <SubmitForm />
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <Navigation />
        <SignIn />
      </div>
    )
  }

}

export default Submit;