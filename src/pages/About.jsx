import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container
      className="bg-light"
      style={{ height: "100vh", margin: "16px auto" }}
    >
      <Row style={{ width: "1320px", height: "100vh" }}>
        <Col xs={12} sm={6} lg={6}>
          <h3 className="text-center  p-3 mt-5 fw-bold">About Us</h3>
          <p className="text-center   ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
            laboriosam? Adipisci aliquam saepe, iure ratione quaerat tempora
            delectus expedita blanditiis perferendis perspiciatis animi
            voluptatibus quisquam minima, tenetur quo modi.
          </p>
          <Button
            className="bg-primary mx-auto my-5 "
            style={{ display: "block" }}
          >
            Read More
          </Button>
        </Col>

        <Col xs={12} sm={6} lg={6} className="items-center overflow-hidden">
          <Image
            src="https://picsum.photos/400/800"
            rounded
            alt="aboutusImg"
            height="100%"
            style={{
              objectFit:"cover",
              objectPosition:"center center",
              overflow:"hidden"
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
