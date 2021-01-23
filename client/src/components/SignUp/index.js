import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { SET_CURRENT_USER } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp() {
  const [state, dispatch] = useStoreContext();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const newUser = {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value
      };
      await API.saveUser(newUser);
      const { data } = await API.loginUser({
        username: newUser.username,
        password: newUser.password,
      })
      dispatch({
        type: SET_CURRENT_USER,
        user: data.user
      });
      localStorage.setItem("auth-token", data.token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <Form onSubmit={e => { handleSubmit(e) }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
      </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicUsername">
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
      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Sign Up
    </Button>
    </Form>
  );
}

export default SignUp;