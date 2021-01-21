import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Submit from "./pages/Submit";
import { StoreProvider } from "./utils/GlobalState";
import User from "./pages/User";

function App() {
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
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/Submit">
            <Submit />
          </Route>
          <Route exact path="/User">
            <User />
          </Route>
          <Route exact path={["/Home", "/"]}>
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
