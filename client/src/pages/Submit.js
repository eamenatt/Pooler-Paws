import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";

function Submit() {
    return (
        <div>
            <Navigation />
            <Jumbotron>
                <h1>Add a new animal</h1>
            </Jumbotron>
            <SearchForm/>
        </div>
    )
}

export default Submit;