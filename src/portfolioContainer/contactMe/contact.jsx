import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactMe = () => {
  return (
      <section id="contact">
        <Container>
          <Row>
            <Col md={6}>
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <h2>Contact Information</h2>
              <ul>
                <li>Phone: 555-555-5555</li>
                <li>Email: john.doe@email.com</li>
                <li>Address: 123 Main St, Anytown USA</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default ContactMe;

