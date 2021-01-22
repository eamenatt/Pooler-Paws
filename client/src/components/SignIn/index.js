import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { SET_CURRENT_USER } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn() {
  const [state, dispatch] = useStoreContext();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const loginUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    await API.loginUser({
      username: loginUser.username,
      password: loginUser.password,
    }).then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        user: res.data.user
      });
      localStorage.setItem("auth-token", res.data.token);
      history.push("/");
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <Form onSubmit={e => { handleFormSubmit(e) }}>
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
    </Form>

  );
}

export default SignIn;