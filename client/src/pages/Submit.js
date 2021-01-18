import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SubmitForm from "../components/SubmitForm";

function Submit() {
    return (
        <div>
            <Navigation />
            <Jumbotron>
                <h1>Add a new animal</h1>
            </Jumbotron>
            <SubmitForm/>
        </div>
    )
}

export default Submit;