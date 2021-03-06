import React from "react";
import Button from "react-bootstrap/Button";
import { SET_CURRENT_USER } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

function LogOut() {
  const [state, dispatch] = useStoreContext();

  function handleLogOut() {
    dispatch({
      type: SET_CURRENT_USER,
      user: {
        _id: 0,
        username: "",
        email: "",
        favcats: [],
        createdcats: []
      }
    });
    localStorage.removeItem("auth-token");
  }
  if (state.currentUser._id !== 0) {
    return (
      <Button onClick={handleLogOut} className="pooler" variant="link">Log Out</Button>
    );
  }
}

export default LogOut;
