import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../components/Navigation";
import SubmitForm from "../components/SubmitForm";
import axios from "axios";
// import SignIn from "../components/SignIn";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";

function Submit() {
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = useState();
  const history = useHistory();

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
      } else {
        return (history.push("/signin"));
      }
    };

    checkLoggedIn();
  }, []);

    return (
      <div>
        <div>
          <Header />
          <Navigation />
          <Jumbotron>
            <h1>Know an animal who needs a home?</h1>
          </Jumbotron>
          <SubmitForm />
        </div>
      </div>
    )
  

}

export default Submit;