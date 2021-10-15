import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Slides from "../components/Slides";
import Header from "../components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./style.css";
import { SET_CURRENT_USER } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import axios from "axios";




function Home() {
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = useState();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "/api/user/validate",
        null,
        { headers: { "x-auth-token": token } }
      );
      console.log(tokenRes.data);
      if (tokenRes.data) {
        const userRes = await axios.get(
          "/api/user",
          { headers: { "x-auth-token": token } }
        );
        dispatch({
          type: SET_CURRENT_USER,
          user: userRes.data
        });
        setUser({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div>
      <Header />
      <Navigation />
      <Container>
        <Jumbotron fluid className="home-jumbotron">
          <h2 className="headline">About Us</h2>
          <p className="home-body">
            We are a local non-profit (501C3) organization helping the feral cat community in Pooler, GA and surrounding areas. Our members are kind- hearted, caring, generous cat-loving humans! Our mission is to trap, neuter and return feral cats in our area. We also re-home cats/kittens that demonstrate friendly or nonferal behavior. This includes feeding, trapping, fostering and transporting to and from vet offices for medical needs or sterilization. There are hundreds of feral cats in our area (and counting). We have 17 members in our group. These individuals provide their time and money to care for these animals.
            </p>
          <p className="home-body">**Due to unforeseen circumstances, the CATURDAY adoption event AT Bentley’s Pet Stuff, that was scheduled for October 16, has been cancelled.  See you in November!**
            </p>
            {/* <img
                    className="homeImage"
                    src={`${process.env.PUBLIC_URL}/assets/septemberdates.png`}
                    alt="Pooler Paws October Adoption events"
                /> */}
        </Jumbotron>
        <Slides />
        <Jumbotron className="home-jumbotron">
          <h3 className="headline">How can you help?</h3>
          <p className="home-body">
            We are so happy you’re interested in getting involved with our work here at Pooler Paws Inc..
            There are so many ways for you to help, and we truly appreciate each and every effort. By lending your
            support, you’ll become a valuable part of our nonprofit organization and help to strengthen our
            operations. Please visit the "contact us" page for information on ways you can help.
            </p>
          <p>
            <Link to="/Contact">
              <Button className="send-form" variant="outline-secondary">Contact Us</Button>
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  )
}

export default Home;