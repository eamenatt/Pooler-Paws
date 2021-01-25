import React from "react";
import Button from "react-bootstrap/Button";
import { SET_CURRENT_USER } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn() {
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
  }
  if (state.currentUser._id !== 0) {
    return (
      <Button onClick={handleLogOut} variant="light">Log Out</Button>
    );
  }
}

export default DeleteBtn;
