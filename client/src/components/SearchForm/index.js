import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function SearchForm(){

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}



/* <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="age"
                placeholder="Age (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="details"
                placeholder="Details (Required)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title && formObject.age)}
                onClick={handleFormSubmit}
              >
                Add New Cat
              </FormBtn>
            </form> */

export default SearchForm;