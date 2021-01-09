import React from "react";
import { Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";

function Contact() {
    return (
        <div>
            <Navigation />
            <h2>Ways to connect:</h2>
            <Row>
                <Col size="sm-12">
                    <div>
                        <ul>
                            <li>Email: <a href="mailto:sampleemail.com" target="_blank">Sample Email</a></li>
                            <li>Phone: 555 555 5555 </li>
                            <li>Address: 1234 woodchuck rd. Pooler Georgia 12345</li>
                            <li>Donations: </li>
                            <li>Join our newsletter: __</li>
                        </ul>
                    </div>
                    <div>
                        <p>Or click here <a href="####" target="blank">HERE</a>
                        to view a copy of our most recent newsletter</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contact;