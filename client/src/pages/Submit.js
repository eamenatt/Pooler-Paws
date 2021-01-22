import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
<<<<<<< HEAD
import SearchForm from "../components/SearchForm";
import Headers from "../components/Header";
import ContactCard from "../components/ContactCard";
=======
import SubmitForm from "../components/SubmitForm";
>>>>>>> main

function Submit() {
    return (
        <div>
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
        </div>
    )
}

export default Submit;