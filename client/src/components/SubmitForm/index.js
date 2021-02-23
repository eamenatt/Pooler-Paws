import React, { useRef, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CAT, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css"
import { Alert } from "react-bootstrap";


function SubmitForm() {
  const nameRef = useRef();
  const genderRef = useRef();
  const detailsRef = useRef();
  // const pictureRef = useRef();
  const [state, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      dispatch({ type: LOADING });
      const savedCat = {
        name: nameRef.current.value,
        gender: genderRef.current.value,
        details: detailsRef.current.value,
      };
      const newCat = await API.saveCat(savedCat)
      dispatch({
        type: ADD_CAT,
        cat: newCat.data
      })
      await API.addCreated(state.currentUser._id, newCat.data)
      setShow(true);
      nameRef.current.value = "";
      genderRef.current.value = "";
      detailsRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Alert show={show} variant="success" className="alert-fixed" onClose={() => setShow(false)} dismissible>You have successfully added a cat!</Alert>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="FirstQuestion">
          <Form.Label>What is your cat's name?</Form.Label>
          <Form.Control required ref={nameRef} placeholder="Write cat's name here... (required)" />
        </Form.Group>
        <Form.Group controlId="GenderQuestion">
          <Form.Label>What is your cat's gender?</Form.Label>
          <Form.Control required ref={genderRef} placeholder="Write cat's gender here... (required)" />
        </Form.Group>
        <Form.Group controlId="TextQuestion">
          <Form.Label>Please provide a description of your cat.</Form.Label>
          <Form.Control as="textarea" required ref={detailsRef} placeholder="Provide description here (required)" rows={3} />
        </Form.Group>
        <Button variant="primary" disabled={state.loading} type="submit">Submit</Button>
        <Form.Text>Have a picture? Please email it to admin@poolerpaws.com along with the pets name and it will be uploaded within 48 hours.</Form.Text>
      </Form>
    </div>
  );
}

export default SubmitForm;