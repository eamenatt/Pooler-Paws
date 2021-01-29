import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";

function Cats() {
  const [cats, setCats] = useState([])
  const [formObject, setFormObject] = useState({})
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = useState();
  const history = useHistory();

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
    loadCats();
  }, []);


  function loadCats() {
    API.getCats()
      .then(res => 
        setCats(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteCat(id) {
    API.deleteCat(id)
      .then(res => loadCats())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.age && formObject.details) {
      API.saveCat({
        name: formObject.name,
        age: formObject.age,
        details: formObject.details,
        picture: formObject.picture,
        availability: formObject.availability
      })
        .then(res => loadCats())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6"></Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Cats On My List</h1>
            </Jumbotron>
            {cats.length ? (
              <List>
                {cats.map(cat => (
                  <ListItem key={cat._id}>
                    <Link to={"/cats/" + cat._id}>
                      <strong>
                        {cat.title} by {cat.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteCat(cat._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }


export default Cats;
