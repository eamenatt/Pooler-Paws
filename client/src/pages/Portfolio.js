import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";

function Portfolio() {
  return (
    <div>
      <Navigation />
      <h2>Looking for a home</h2>
      <Container>
        <Row>
          <Col size="md-12">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Pet Name</Card.Title>
                <Card.Text size="md" >Pet Age</Card.Text>
                <Card.Text>
                  Pet Description
                </Card.Text>
                {/* <Card.Subtitle className="mb-2 text-muted">Status: {props.adopted === "true" ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Portfolio;


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