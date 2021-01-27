import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from "axios";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import PetList from "./pages/PetList";
import Submit from "./pages/Submit";
import Home from "./pages/Home";
import { StoreProvider, useStoreContext } from "./utils/GlobalState";
import User from "./pages/User";
import axios from "axios";
// import { SET_CURRENT_USER } from "./utils/actions";

function App() {
  // const [state, dispatch] = useStoreContext();
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
        setUser({
          token,
          user: userRes.data,
        });
        // dispatch({
        //   type: SET_CURRENT_USER,
        //   user: {
        //     _id: user._id,
        //     username: user.user
        //   }
        // });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
        <div>
          {console.log(user.user)}
          <StoreProvider currentUser={user.user}>
            <Switch>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/newpet">
                <Contact />
              </Route>
              <Route exact path="/petlist">
                <PetList />
              </Route>
              <Route exact path="/submit">
                <Submit />
              </Route>
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/user">
                <User />
              </Route>
              <Route exact path={["/home", "/"]}>
                <Home />
              </Route>
            </Switch>
          </StoreProvider>
        </div>
    </Router>
  )
}

export default App;
