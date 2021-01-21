import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SubmitForm from "../components/SubmitForm";
import SignUp from "../components/SignUp"
function Submit() {
  console.log(localStorage.getItem("auth-token"))
  if (localStorage.getItem("auth-token") !== null) {
    return (
      <div>
        <Navigation />
        <Jumbotron>
          <h1>Add a new animal</h1>
        </Jumbotron>
        <SubmitForm />
      </div>
    )
  } else {
    return (
    <div>
      <SignUp />
    </div>
    )
  }

}

export default Submit;