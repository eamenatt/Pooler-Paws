import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from "axios";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import PetList from "./pages/PetList";
import Submit from "./pages/Submit";
import Home from "./pages/Home";
import { StoreProvider } from "./utils/GlobalState";
import User from "./pages/User";

function App() {

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenRes = await axios.post(
  //       "/api/user/validate",
  //       null,
  //       { headers: { "token": token } }
  //     );
  //     // console.log(tokenRes.data);
  //     if (tokenRes.data) {
  //       const userRes = await axios.get(
  //         "/api/user",
  //         { headers: { "token": token } }
  //       );
  //       setUser({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   };

  //   // checkLoggedIn();
  // }, []);

  return (
    <Router>
        <div>
          <StoreProvider>
            <Switch>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/NewPet">
                <Contact />
              </Route>
              <Route exact path="/PetList">
                <PetList />
              </Route>
              <Route exact path="/Submit">
                <Submit />
              </Route>
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/User">
                <User />
              </Route>
              <Route exact path={["/Home", "/"]}>
                <Home />
              </Route>
            </Switch>
          </StoreProvider>
        </div>
    </Router>
  )
}

export default App;
