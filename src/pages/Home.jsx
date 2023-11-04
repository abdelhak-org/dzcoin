import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppCard from "../components/AppCard";

const Home = () => {
  return (
    <Container>
      <Row>
        <h3 className="text-center p-2">Loved Products </h3>
      </Row>
      <Row className="gap-2 ">
        <AppCard  title="Iphone 14 pro"
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw" />
        <AppCard  title="Iphone 14 pro"
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
        <AppCard  title="Iphone 14 pro"
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
        <AppCard  title="Iphone 14 pro"
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
        <AppCard  title="Iphone 14 pro"
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
        <AppCard title="Iphone 14 pro" 
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
        <AppCard  title="Iphone 14 pro"
         src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
        <AppCard  title="Iphone 14 pro" 
        src="https://source.unsplash.com/an-iphone-case-sitting-on-a-table-next-to-a-vase-of-flowers-j2B7PCZNtvw"/>
      </Row>
    </Container>
  );
};

export default Home;
