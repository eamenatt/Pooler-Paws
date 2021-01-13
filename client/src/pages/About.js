import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Slides from "../components/Slides";
import Header from "../components/Header";
import Jumbotron from 'react-bootstrap/jumbotron';
import Button from 'react-bootstrap/button';

import "./style.css";


function About() {
    return (

        <div>
            <Header />
            <Navigation />
            <Slides />
            <br></br>

            <Row>
                <div>
                    <h2>About Us</h2>
                    <p> 
                        We are a local non-profit organization helping the feral cat community in Pooler, GA. Our
                        members
                        are kind hearted, caring, generous cat loving humans! Our mission is to trap, neuter and return
                        feral cats in our area. We also re home cats/kittens that demonstrate friendly or non feral
                        behavior. This includes feeding, trapping, fostering and transporting to and from vet offices
                        for
                        medical needs or sterilization. There are roughly 50 feral cats in our area (and counting). We
                        have
                        9 members in our group. These individuals provide their time and money to care for these
                        animals.
                    </p>
                    <Jumbotron>
                        <h3>How can you help?</h3>
                        <p> 
                            We are so happy you’re interested in getting involved with our work here at Pooler Paws Inc..
                            There are so many ways for you to help, and we truly appreciate each and every effort. By lending your
                            support, you’ll become a valuable part of our Nonprofit Organization and help to strengthen our
                            operations. Please contact us for information on ways you can help.
                    </p>
                        <p>
                        <Button variant="outline-secondary">Contact Us</Button>{' '}
                        </p>
                    </Jumbotron>
                </div>
            </Row>

        </div>
    )
}

export default About;