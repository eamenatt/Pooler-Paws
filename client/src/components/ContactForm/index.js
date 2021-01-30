import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import { Form, Button } from 'react-bootstrap';


class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
    buttonText: 'Send Message'
  }

  formSubmit = (e) => {
    e.preventDefault()

    this.setState({
      buttonText: '...sending'
    })

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('/API/send', data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm())
        console.log(data)
      })
      .catch(() => {
        console.log(data)
        console.log('Message not sent')
      })
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      buttonText: 'Message Sent'
    })
  }

  render() {
    return (

      <div>
        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <Form.Group controlId="name">
            <Form.Label className="name" >Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter your full name"
              onChange={e => this.setState({ name: e.target.value })}
              className="message-name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="email" >Email Address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={e => this.setState({ email: e.target.value })}
              className="message-email"
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label className="massage" >Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={this.state.message}
              rows="3"
              placeholder="Enter your message"
              onChange={e => this.setState({ message: e.target.value })}
              required
            />
          </Form.Group>
          <Button type="submit" className="button button-primary">
            {this.state.buttonText}
          </Button>
        </form>
      </div>


    );
  }
}

export default Contact;


{/* <div>
  <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
  <label className="message" htmlFor="message-input">Your Message</label>
  <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

  <label className="message-name" htmlFor="message-name">Your Name</label>
  <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

  <label className="message-email" htmlFor="message-email">Your Email</label>
  <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

  <div className="button--container">
      <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
  </div>
</form>
    </div > */}
