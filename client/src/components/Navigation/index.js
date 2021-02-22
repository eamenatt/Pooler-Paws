import React from "react";
import { Nav, NavDropdown, Form } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import LogOut from "../LogOut"

function Navigation() {
  const [state, dispatch] = useStoreContext();

  if (state.currentUser._id !== 0) {
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/submit">Add a new pet</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/catstory">Adoption Stories</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/user">User Page</Nav.Link>
          <Form inline className="userStatus">
            <span>Welcome, {state.currentUser.username}</span>
            <LogOut />
          </Form>
          
        </Nav>
      </div>
    );
  } else {
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Us</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/petlist">Pet List</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/catstory">Adoption Stories</Nav.Link>
          <NavDropdown title="Sign In" id="basic-nav-dropdown" className="navBar">
            <NavDropdown.Item as={NavLink} className="navBar" to="/signin">Sign In</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} className="navBar" to="/signup">Create Account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </div>
    );
  }
}

export default Navigation;
