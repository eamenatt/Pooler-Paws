import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn/index";
import Header from "../components/Header/index";
import Navigation from "../components/Navigation/index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";

function SignInPage() {
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
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <div>
      <Header />
      <Navigation />
      <SignIn />
    </div>
  );
}

export default SignInPage;