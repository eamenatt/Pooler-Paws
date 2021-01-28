import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from "axios";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import PetList from "./pages/PetList";
import Submit from "./pages/Submit";
import Home from "./pages/Home";
import { StoreProvider } from "./utils/GlobalState";
import User from "./pages/User";


function App() {
  return (
    <Router>
      <div>
          <StoreProvider>
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
