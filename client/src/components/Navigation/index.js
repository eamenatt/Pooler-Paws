import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  if (state.currentUser._id !== 0) {
    return (
      <Nav
        activeKey="/home"
      >
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/submit">Add a new pet</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/user">User Page</Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav>
    );
  } else {
    return (
      <Nav
        activeKey="/home"
      >
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/signup">Sign Up</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/signin">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav>
    );
  }
}

export default Navigation;
