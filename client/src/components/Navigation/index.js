import React from "react";
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import LogOut from "../LogOut"

function Navigation() {
  const [state, dispatch] = useStoreContext();

  if (state.currentUser._id !== 0) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
            <Nav.Link as={NavLink} className="navBar" to="/submit">Add a new pet</Nav.Link>
            <Nav.Link as={NavLink} className="navBar" to="/user">User Page</Nav.Link>
          </Nav>
          <Form inline>
            <LogOut />
          </Form>
        </Navbar.Collapse>
      </Navbar>

    );
  } else {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
      <NavDropdown title="Sign In" id="basic-nav-dropdown">
               <NavDropdown.Item as={NavLink} className="navBar" to="/signin">Sign In</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item as={NavLink} className="navBar" to="/signup">Create Account</NavDropdown.Item>
          </NavDropdown>
          </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
