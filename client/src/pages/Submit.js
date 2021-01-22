import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import Headers from "../components/Header";
import ContactCard from "../components/ContactCard";

function Submit() {
    return (
        <div>
            <Headers />
            <Navigation />

            <h2>Add a new animal</h2>

            <SearchForm />
            <ContactCard />
        </div>
    )
}

export default Submit;