import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { SET_CURRENT_USER, LOADING } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignUpBtn from "../SignUpButton";
import "./style.css";

function SignIn() {
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = useStoreContext();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch({ type: LOADING });
    API.loginUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then(res => {
        dispatch({
          type: SET_CURRENT_USER,
          user: res.data.user
        });
        setUser({
          token: res.data.token,
          user: res.data.user,
        });
        localStorage.setItem("auth-token", res.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form className="form" onSubmit={e => { handleFormSubmit(e) }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control required ref={usernameRef} placeholder="Enter username" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
      </Button>
      <SignUpBtn />
      </Form>
    </div>
  );
}

export default SignIn;