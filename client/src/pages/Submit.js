import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
<<<<<<< HEAD
import SearchForm from "../components/SearchForm";
import Headers from "../components/Header";
import ContactCard from "../components/ContactCard";
=======
import SubmitForm from "../components/SubmitForm";
<<<<<<< HEAD
>>>>>>> main
=======
import SignUp from "../components/SignUp"
import Header from "../components/Header";
>>>>>>> a27d180beafc8563b3348a2803b9c8517a23354e

function Submit() {
  console.log(localStorage.getItem("auth-token"))
  if (localStorage.getItem("auth-token") !== null) {
    return (
      <div>
        <div>
<<<<<<< HEAD
            <Headers />
            <Navigation />
<<<<<<< HEAD

            <h2>Add a new animal</h2>

            <SearchForm />
            <ContactCard />
=======
            <Jumbotron>
                <h1>Add a new animal</h1>
            </Jumbotron>
            <SubmitForm/>
>>>>>>> main
=======
          <Header />
          <Navigation />
          <Jumbotron>
            <h1>Know an animal who needs a home?</h1>
          </Jumbotron>
          <SubmitForm />
>>>>>>> a27d180beafc8563b3348a2803b9c8517a23354e
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