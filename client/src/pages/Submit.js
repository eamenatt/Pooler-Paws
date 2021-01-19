import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import Headers from "../components/Header";

function Submit() {
    return (
        <div>
            <Headers />
            <Navigation />

            <h2>Add a new animal</h2>

            <SearchForm />
        </div>
    )
}

export default Submit;