import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATS, LOADING, ADD_FAVORITE, SET_CURRENT_USER } from "../utils/actions";
import { useHistory } from "react-router-dom";
import axios from "axios";

import API from "../utils/API";
import "./style.css";

function PetList() {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  const [user, setUser] = useState();

  const getCats = () => {
    dispatch({ type: LOADING });
    API.getCats()
      .then(results => {
        dispatch({
          type: UPDATE_CATS,
          cats: results.data
        });
      })
      .catch(err => console.log(err));
  };

  async function addFavorite(e, cat) {
    e.preventDefault();
    const match = state.favorites.filter(favorite => favorite._id === cat._id).length;
    if (match) {
      alert("You have already liked this cat!");
    } else {
      alert("Cat Succesfully Liked!");
      await API.addFavorite(state.currentUser._id, cat)
      dispatch({ type: LOADING });
      const favorites = await API.getFavorites(state.currentUser._id);
      dispatch({
        type: ADD_FAVORITE,
        favorites: favorites.data.favcats
      });
    }
  };

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
    getCats();

  }, []);

  return (
    <div>
      <Header />
      <Navigation />
      <h2>Looking for a home</h2>
      <Container>
        <Row>
          <Col size="md-12">
            {state.cats.map(cat => (
              <Card key={cat._id} style={{ width: "100%" }}>
                <Card.Img className="cardStyle" variant="top" src={"./assets/" + cat.picture} />
                <Card.Body>
                  <Card.Title>{cat.name}</Card.Title>
                  <Card.Text size="md" >Age: {cat.age}</Card.Text>
                  <Card.Text>
                    {cat.details}
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Status: {cat.adopted = true ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
                  {state.currentUser._id !== 0 ?
                    <div>
                      <Button onClick={(event) => { addFavorite(event, cat) }}>Like</Button>
                    </div> : null}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PetList;