import React from "react";
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import LogOut from "../LogOut"
import orangepaw from "./orangepaw.png";

function Navigation() {
  const [state, dispatch] = useStoreContext();

  if (state.currentUser._id !== 0) {
    return (
      <Nav className="mr-auto justify-content-center">
        <Navbar.Brand>
          <img
            src= {orangepaw}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
        <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
        <Nav.Link as={NavLink} className="navBar" to="/submit">Add a new pet</Nav.Link>
        <Nav.Link as={NavLink} className="navBar" to="/user">User Page</Nav.Link>
        <Navbar.Brand>
          <img
            src= {orangepaw}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
          <LogOut/>
      </Nav>
    );
  } else {
    return (
      <Nav className="mr-auto justify-content-center">
        <Navbar.Brand>
          <img
            src= {orangepaw}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
        <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
        <NavDropdown className="navBar" title="Sign In" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} className="navBar" to="/signin">Sign In</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} className="navBar" to="/signup">Create Account</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Brand>
          <img
            src= {orangepaw}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Nav>
    );
  }
}

export default Navigation;
