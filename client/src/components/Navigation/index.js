import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Portfolio">Pet List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Submit">Post a Pet</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
