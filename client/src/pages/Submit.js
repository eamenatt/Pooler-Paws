import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactCard";
import SubmitForm from "../components/SubmitForm";
import SignUp from "../components/SignUp"
import Header from "../components/Header";


function Submit() {
  console.log(localStorage.getItem("auth-token"))
  if (localStorage.getItem("auth-token") !== null) {
    return (
      <div>
        <div>

          <Header />
          <Navigation />
          <Jumbotron>
            <h1>Know an animal who needs a home?</h1>
          </Jumbotron>
          <SubmitForm />
          <ContactCard />
        </div>
      </div>
    )
  } else {
    return (
    <div>
      <Header />
      <SignUp />
    </div>
    )
  }

}

export default Submit;