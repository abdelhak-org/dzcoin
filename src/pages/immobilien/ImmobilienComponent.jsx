import React from "react";
import { Container, Row } from "react-bootstrap";
import AppCard from "../../components/AppCard";
const ImmobilienComponent = () => {
  return (
    <Container>
      <Row>
        <h3 className="text-center p-2">Loved Houses </h3>
      </Row>
      <Row className="gap-2 ">
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />{" "}
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />{" "}
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />{" "}
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />{" "}
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />{" "}
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />{" "}
        <AppCard
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          title="Villa White Concret "
        />
      </Row>
    </Container>
  );
};

export default ImmobilienComponent;
