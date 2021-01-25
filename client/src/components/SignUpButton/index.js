import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function SignUpBtn() {

    return (
      <Link to="/signup">
        <Button variant="dark">Sign Up</Button>
      </Link>
    );
}

export default SignUpBtn;
