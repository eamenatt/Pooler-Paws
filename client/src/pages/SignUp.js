import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SignUp from "../components/SignUp/index";
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
      <SignUp />
    </div>
  );
}

export default SignInPage;