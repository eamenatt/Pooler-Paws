import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CAT, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css"


function SubmitForm() {
  const nameRef = useRef();
  const ageRef = useRef();
  const detailsRef = useRef();
  // const pictureRef = useRef();
  const [state, dispatch] = useStoreContext();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      dispatch({ type: LOADING });
      const savedCat = {
        name: nameRef.current.value,
        age: parseInt(ageRef.current.value),
        details: detailsRef.current.value,
      };
      const newCat = await API.saveCat(savedCat)
      dispatch({
        type: ADD_CAT,
        cat: newCat.data
      })
      console.log("response from cat creation", newCat.data);
      await API.addCreated(state.currentUser._id, newCat.data)

      nameRef.current.value = "";
      ageRef.current.value = "";
      detailsRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  // function addCreated(e) {
  //   e.preventDefault();
  //   API.addCreated(state.currentUser._id, createdcats)
  //     .then(results => {
  //       console.log("API Response: ", results.data);
  //     })
  //     .catch(error => console.log(error));
  // };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>What is your cat's name?</Form.Label>
        <Form.Control required ref={nameRef} placeholder="Write cat's name here... (required)" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>What is your cat's age?</Form.Label>
        <Form.Control required ref={ageRef} placeholder="Write cat's age here... (required)" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please provide a description of your cat.</Form.Label>
        <Form.Control as="textarea" required ref={detailsRef} placeholder="Provide description here (required)" rows={3} />
      </Form.Group>
      <Button variant="primary" disabled={state.loading} type="submit">Submit</Button>
      <Form.Text>Have a picture? Please email it to admin@poolerpaws.com along with the pets name and it will be uploaded within 48 hours.</Form.Text>
    </Form>
  );
}

export default SubmitForm;