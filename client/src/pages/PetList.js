import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
<<<<<<< HEAD:client/src/pages/Portfolio.js
<<<<<<< HEAD
import Hearder from "../components/Header";
import ContactCard from "../components/ContactCard";
=======
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATS, LOADING } from "../utils/actions";
import API from "../utils/API";
>>>>>>> main
=======
import Header from "../components/Header";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATS, LOADING } from "../utils/actions";
import API from "../utils/API";
import "./style.css";
>>>>>>> a27d180beafc8563b3348a2803b9c8517a23354e:client/src/pages/PetList.js

function PetList() {
  const [state, dispatch] = useStoreContext();

  const getCats = () => {
    dispatch({ type: LOADING });
    API.getCats()
      .then(results => {
        console.log(results);
        dispatch({
          type: UPDATE_CATS,
          cats: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div>
<<<<<<< HEAD:client/src/pages/Portfolio.js
      <Hearder />
=======
      <Header/>
>>>>>>> a27d180beafc8563b3348a2803b9c8517a23354e:client/src/pages/PetList.js
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
      <ContactCard />
    </div>
  )
}

export default PetList;