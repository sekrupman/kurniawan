import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import React from "react";

export const Contact = () => {
    
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyAdFt0VPP58O5xyMbd1OC2XX11MyYWckIbcEACeSZ-E6PKn87rF0E7J2tkPIHSyO1b/exec';
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.forms['Portfolio-Contact-Form'];
    const formData = new FormData(form);

    try {
      setIsLoading(true);
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Success!', response);
        setIsSubmitted(true);
        setTimeout(() => {
          form.reset();
        }, 2000);
      } else {
        console.error('Error!', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error!', error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="contact" id="connect">
      <container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src='../images/contact.png' alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2> Get In Touch</h2>
            <div className="form">
            <form onSubmit={handleSubmit} name='Portfolio-Contact-Form'>
              <Row>
                <Col sm={6} className='px-1'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" name='firstName' placeholder="First Name" />
                    </Form.Group>
                </Col>
                <Col sm={6} className='px-1'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" name='lastName' placeholder="Last Name" />
                    </Form.Group>
                </Col>
                <Col sm={6} className='px-1'>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name='email' placeholder="Email" />
                    </Form.Group>
                </Col>
                <Col sm={6} className='px-1'>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="number" name='phone' placeholder="Phone Number" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" name='message' rows={3} />
                    </Form.Group>
                    {isSubmitted ? (
                  <div className="success-notification">
                    Thank You for your message
                  </div>
                ) : (
                  <React.Fragment>
                    {isLoading ? (
                      <Button variant="info" size='lg' disabled>Sending...</Button>
                    ) : (
                      <Button variant="info" size='lg' onClick={handleSubmit}>Send</Button>
                    )}
                  </React.Fragment>
                  )}
                </Col>
              </Row>
            </form>
            </div>
          </Col>
        </Row>
      </container>
    </section>
  );
};