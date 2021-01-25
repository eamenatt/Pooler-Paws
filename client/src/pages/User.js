import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_FAVORITE, ADD_CREATED, LOADING } from "../utils/actions";
import API from "../utils/API";
import "./style.css";
import Header from "../components/Header";

function User() {
  const [state, dispatch] = useStoreContext();

  async function getCats() {
    try {
      dispatch({ type: LOADING });
      if (state.currentUser._id) {
        console.log("Current User ID: ", state.currentUser._id);
      } else {
        console.log("User is not logged in.");
      }
      const favorites = await API.getFavorites(state.currentUser._id)
      console.log("getFavorites API call returns: ", favorites);
      dispatch({
        type: ADD_FAVORITE,
        favorites: favorites.data.favcats
      });
      dispatch({ type: LOADING });
      const created = await API.getCreated(state.currentUser._id)
      console.log("getCreated API call returns: ", created);
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

  return (
    <div>
      <Header />
      <Navigation />
      <Container>
        <Row>
          <Col className="scrollBox" size="md-12">
            <h2>Favorite Cats</h2>
            {state.favorites.length ? (
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
                  <h1>View your favorite cats here by clicking the like button on a cat on the pet list page.</h1>
                </div>
              )
            }
          </Col>

          <Col className="scrollBox" size="md-12">
            <h2>Created Cats</h2>
            {state.created.length ? (
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
}

export default User;