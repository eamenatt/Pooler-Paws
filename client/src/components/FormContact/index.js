import React from "react";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Button from "react-bootstrap/Button";

function FormContact() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Write to us</p>
                        <div className="grey-text">
                            <MDBInput className="input-field"label="Your name" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput className="input-field"label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                            <MDBInput className="input-field"type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                        </div>
                        <div className="text-center">
                            <Button className="send-form"ariant="outline-secondary">Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                            </Button>{' '}
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
};

export default FormContact;