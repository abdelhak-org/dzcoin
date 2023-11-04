import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateAccount = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      className="bg-light pt-2"
      style={{ height: "100vh", margin: "16px auto"  }}
    >
      <h1 className=" my-3 text-center fw-bolder">Create a New Account</h1>
      <Form onSubmit={submitHandle}>
        <Form.Group className="my-3 p-2 " controlId="formBasicEmail">
          <Form.Label className=" p-2 fw-bold">Email Address</Form.Label>
          <Form.Control
            onChange={(e) => setState({ ...state, email: e.target.value })}
            type="email"
            placeholder="Enter email"
            className="mb-2"
          />
          <Form.Text className="text-muted  ">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-5 p-2 " controlId="formBasicPassword">
          <Form.Label className="p-2 fw-bold">Password</Form.Label>
          <Form.Control
            onChange={(e) => setState({ ...state, password: e.target.value })}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Check className=" mx-auto" type="checkbox" label="Check me out" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAccount;
