import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function Navigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >

      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="/home">Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="link-1">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="link-2">Pet List</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="navBar" href="link-2">Add a new pet</Nav.Link>
        </Nav.Item>
      </Nav>
    </Nav>
  );
}

export default Navigation;
