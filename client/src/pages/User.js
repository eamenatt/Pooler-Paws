import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useStoreContext } from "../utils/GlobalState";
import SignIn from "../components/SignIn";
import { ADD_FAVORITE, ADD_CREATED, SET_CURRENT_USER, LOADING } from "../utils/actions";
import API from "../utils/API";
import "./style.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function User() {
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = useState();
  const history = useHistory();
  
  useEffect(() => {
    checkLoggedIn();
  }, []);

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
      getCats(userRes.data._id);

    }
  };
  async function getCats(id) {
    const userId = id || state.currentUser._id;
    try {
      dispatch({ type: LOADING });
       const favorites = await API.getFavorites(userId)
      dispatch({
        type: ADD_FAVORITE,
        favorites: favorites.data.favcats
      });
      dispatch({ type: LOADING });
      const created = await API.getCreated(userId)
      dispatch({
        type: ADD_CREATED,
        created: created.data.createdcats
      });
    } catch (error) {
      console.log(error);
    }
  };



  if (state.currentUser._id !== 0) {
    return (
      <div>
        <Header />
        <Navigation />
        <Container>
          <Row>
            <Col size="md-12">
              <h2 style={{color: "rgb(241, 165, 66)"}}>Your Favorite Cats</h2>
              {state.favorites.length !== 0 ? (
                <div className="scrollBox">
                  {state.favorites.map(cat => (
                    <Card key={cat._id} style={{ width: "100%", backgroundColor: "rgb(241, 165, 66)", opacity: "96%", margin: "2%"}}>
                      <Card.Img variant="top" src={"./assets/" + cat.picture} />
                      <Card.Body>
                        <Card.Title style={{ color: "white", textAlign: "center" }}>{cat.name}</Card.Title>
                        <Card.Text size="md" style={{ color: "white" }}>Age: {cat.age}</Card.Text>
                        <Card.Text style={{ color: "white" }}>
                          {cat.details}
                        </Card.Text>
                        <Card.Subtitle className="mb-2" style={{ color: "white", textAlign: "center" }}>Status: {cat.adopted = true ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              ) : (
                  <div>
                    <h1>No favorited cats added. To favorite a pet, click the
                      "like" button on one of the pet cards on the "Pet List" page.</h1>
                    <Link to="/petlist">
                      <Button variant="outline-secondary">Click Here!</Button>
                    </Link>
                  </div>
                )
              }
            </Col>
            <Col size="md-12">
              <h2 style={{color: "rgb(241, 165, 66)"}}>Your Added Cats</h2>
              {state.created.length !== 0 ? (
                <div className="scrollBox">
                  {state.created.map(createdcats => (
                    <Card key={createdcats._id} style={{ width: "100%", backgroundColor: "rgb(241, 165, 66)", opacity: "96%", margin: "2%"}}>
                      <Card.Img variant="top" src={"./assets/" + createdcats.picture} />
                      <Card.Body>
                        <Card.Title style={{ color: "white", textAlign: "center" }}>{createdcats.name}</Card.Title>
                        <Card.Text size="md" style={{ color: "white" }}>Age: {createdcats.age}</Card.Text>
                        <Card.Text style={{ color: "white" }}>
                          {createdcats.details}
                        </Card.Text>
                        <Card.Subtitle className="mb-2" style={{ color: "white", textAlign: "center" }}>Status: {createdcats.adopted = true ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              ) : (
                  <div>
                    <h1>Sign up for an account to add new cats to the site and see your added cats here!</h1>
                  </div>
                )
              }
            </Col>

          </Row>
        </Container>
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <Navigation />
        <SignIn />
      </div>
    )
  }
}

export default User;