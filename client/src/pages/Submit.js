import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SubmitForm from "../components/SubmitForm";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import { useStoreContext } from "../utils/GlobalState";


function Submit() {
  const [state, dispatch] = useStoreContext();

  if (state.currentUser._id !== 0) {
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