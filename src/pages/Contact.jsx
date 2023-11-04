import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      className="bg-light pt-2"
      style={{ height: "100vh", margin: "16px auto" }}
    >
      <h1 className="text-center my-5">Contact Us </h1>
      <Form onSubmit={submitHandle}>
        <Form.Group className="my-3 p-2" controlId="formBasicEmail">
          <Form.Label className=" p-2 fw-bold">UserName :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your UserName "
            className="mb-2"
          />
        </Form.Group>

        <Form.Group className="my-3 p-2" controlId="formBasicEmail">
          <Form.Label className=" p-2 fw-bold">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="mb-2"
          />
          <Form.Text className="text-muted ">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="my-3 p-2"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="p-2 fw-bold">Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary"  size="lg" type="submit" className="d-block mx-auto my-5 w-25 ">
          Submit
        </Button>
      </Form>
    </Container> 
  );
};

export default Contact;
