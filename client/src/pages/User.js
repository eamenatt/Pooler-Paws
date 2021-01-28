import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useStoreContext } from "../utils/GlobalState";
import SignIn from "../components/SignIn";
import { ADD_FAVORITE, ADD_CREATED, LOADING } from "../utils/actions";
import API from "../utils/API";
import "./style.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function User() {
  const [state, dispatch] = useStoreContext();

  async function getCats() {
    try {
      dispatch({ type: LOADING });
      const favorites = await API.getFavorites(state.currentUser._id)
      dispatch({
        type: ADD_FAVORITE,
        favorites: favorites.data.favcats
      });
      dispatch({ type: LOADING });
      const created = await API.getCreated(state.currentUser._id)
      dispatch({
        type: ADD_CREATED,
        created: created.data.createdcats
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  if (state.currentUser._id !== 0) {
    return (
      <div>
        <Header />
        <Navigation />
        <Container>
          <Row>
            <Col className="scrollBox" size="md-12">
              <h2>Favorite Cats</h2>
              {state.favorites.length !== 0 ? (
                <div>
                  {state.favorites.map(cat => (
                    <Card key={cat._id} style={{ width: "100%" }}>
                      <Card.Img variant="top" src={"./assets/" + cat.picture} />
                      <Card.Body>
                        <Card.Title>{cat.name}</Card.Title>
                        <Card.Text size="md" >Age: {cat.age}</Card.Text>
                        <Card.Text>
                          {cat.details}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Status: {cat.adopted = true ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
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
            <Col className="scrollBox" size="md-12">
              <h2>Created Cats</h2>
              {state.created.length !== 0 ? (
                <div>
                  {state.created.map(createdcats => (
                    <Card key={createdcats._id} style={{ width: "100%" }}>
                      <Card.Img variant="top" src={"./assets/" + createdcats.picture} />
                      <Card.Body>
                        <Card.Title>{createdcats.name}</Card.Title>
                        <Card.Text size="md" >Age: {createdcats.age}</Card.Text>
                        <Card.Text>
                          {createdcats.details}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Status: {createdcats.adopted = true ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
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