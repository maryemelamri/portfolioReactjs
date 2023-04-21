import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactMe = () => {
  return (
      <section id="contact">

              <h2>Contact Me</h2>
              <p>Get in touch with me using the form below or the contact information on the right:</p>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <Button style={{justifyContent: "center"}}variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
      </section>
  );
};

export default ContactMe;

