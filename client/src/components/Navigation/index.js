import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function Navigation() {
  return (
    <Nav
      activeKey="/home"
    >

      <Nav defaultActiveKey="/Home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/signup">Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/signin">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/Contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/PetList">Pet List</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/Submit">Add a new pet</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/User">User Page</Nav.Link>
        </Nav.Item>
      </Nav>
    </Nav>
  );
}

export default Navigation;
