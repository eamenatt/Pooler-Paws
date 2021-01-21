import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SubmitForm from "../components/SubmitForm";
import Header from "../components/Header";

function Submit() {
    return (
        <div>
            <Header/>
            <Navigation />
            <Jumbotron>
                <h1>Know an animal who needs a home?</h1>
            </Jumbotron>
            <SubmitForm/>
        </div>
    )
}

export default Submit;