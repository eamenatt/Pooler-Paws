import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import API from "../../utils/API";

function SignIn() {
  // const [userCode, setUserCode] = useState("")
  const [values, setValues] = useState({});
  const [error, setError] = useState();
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  function handleInputChange(event) {
    event.persist();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("sumbitting login data")
    try {
      const loginUser = {
        username: values.username,
        password: values.password,
      };
      const loginRes = await API.loginUser({
        username: loginUser.username,
        password: loginUser.password,
      });
      setUser({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      console.log(user);
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/Submit");
    } catch (err) {
      if (err.response.data.msg) {
        setError(err.response.data.msg);
      }
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="form-signin" onSubmit={handleFormSubmit}>
              <h1 className="h3 mb-3">Please sign in...</h1>
              {error && (
                <>
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setError(undefined)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </>
              )}
              <div className="form-group">
                <label htmlFor="inputEmail" className="sr-only">
                  Email Address
								</label>
                <input
                  name="username"
                  onChange={handleInputChange}
                  type="text"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword" className="sr-only">
                  Password
								</label>
                <input
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
								</label>
              </div>
              <button className="inverted" id="signup-login-btn" type="submit">
                Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;