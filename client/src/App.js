import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact.js";
import Cats from "./pages/Portfolio";
import UserContext from "./context/userContext";

function App() {
  const [user, setUser] = useState({
    token: undefined,
    user: undefined,
  });


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
      // console.log(tokenRes.data);
      if (tokenRes.data) {
        const userRes = await axios.get(
          "/api/user",
          { headers: { "x-auth-token": token } }
        );
        setUser({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (

    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>

        </Switch>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Submit">
          <Submit />
        </Route>
        <Route exact path={"/signin"}>
          <SignUp />
        </Route>
        <Route exact path={"/signup"}>
          <SignUp />
        </Route>
        <Route exact path={["/Home", "/"]}>
          <Home />
        </Route>
      </UserContext.Provider>
    </Router>

  )
}

export default App;
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/Submit">
            <Submit />
          </Route>
          <Route exact path={["/Home", "/"]}>
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
