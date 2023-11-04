import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Container 
      className="bg-light p-5 "
      style={{ height: "fit-content", margin: "16px auto"  }}
    >
      <h1 className=" my-3 text-center fw-bolder">Login </h1>
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

        <Form.Group className="my-3 p-2 " controlId="formBasicPassword">
          <Form.Label className="p-2 fw-bold ">Password</Form.Label>
          <Form.Control
            onChange={(e) => setState({ ...state, password: e.target.value })}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Check className=" mx-auto my-3 " type="checkbox" label="Accept The Roles" />
        <Button  variant="primary" size="lg" type="submit"  className="mx-auto d-block w-25" >
          Submit
        </Button>
      </Form>
      <p className="mx-auto w-50 text-center my-2 ">you do not  have an Account </p>
    </Container>
  );
};

export default Login;
