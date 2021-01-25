import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_FAVORITE, LOADING } from "../utils/actions";
import SignIn from "../components/SignIn";
import API from "../utils/API";
import "./style.css";
import Header from "../components/Header";

function User() {
  const [state, dispatch] = useStoreContext();

  const getCats = () => {
    dispatch({ type: LOADING });
    if (state.currentUser._id) {
      console.log("Current User ID: ", state.currentUser._id);
    } else {
      console.log("User is not logged in.");
    }
    API.getFavorites(state.currentUser._id)
      .then(results => {
        dispatch({
          type: ADD_FAVORITE,
          favorites: results.data.favcats
        });
      })
      .catch(err => console.log(err));
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
              {state.favorites.length ? (
                <div>
                  {state.favorites.map(cat => (
                    <Card key={cat._id} style={{ width: "100%" }}>
                      <Card.Img variant="top" src={"./assets/" + cat.picture} />
                      <Card.Body>
                        <Card.Title>{cat.name}</Card.Title>
                        <Card.Text size="md" >{cat.age}</Card.Text>
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
              <h2>Cats You've Added</h2>
              {state.cats.map(cat => (
                <Card key={cat._id} style={{ width: "100%" }}>
                  <Card.Img variant="top" src={"./assets/" + cat.picture} />
                  <Card.Body>
                    <Card.Title>{cat.name}</Card.Title>
                    <Card.Text size="md" >{cat.age}</Card.Text>
                    <Card.Text>
                      {cat.details}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Status: {cat.adopted = true ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
                  </Card.Body>
                </Card>
              ))}
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