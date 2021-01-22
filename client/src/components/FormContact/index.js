import React from "react";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Button from "react-bootstrap/Button";

function FormContact() {
    return (
        <form>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">

                        <p className="h5 text-center mb-4">Write to us</p>
                        {/* <div className="grey-text"> */}
                        <MDBInput className="input-field" label="Your Name" icon="user" group type="text" validate error="wrong"
                            success="right" />
                        <MDBInput className="input-field" label="Phone" icon="envelope" group type="email" validate error="wrong"
                            success="right" />

                    </MDBCol>
                {/* </MDBRow> */}
                {/* <MDBRow className="secondCol">  */}
                    <MDBCol md="6">
                        <MDBInput className="input-field" label="Email" icon="envelope" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput className="input-field" label="Subject" icon="envelope" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput className="input-field" type="textarea" rows="2" label="Your Message" icon="pencil-alt" />
                        {/* </div> */}
                        <br></br>
                        <div className="text-center">
                            <Button className="send-form" ariant="outline-secondary">Send
                          <MDBIcon far icon="paper-plane" className="ml-1" />
                            </Button>{' '}
                        </div>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        </form>

    );
};

export default FormContact;