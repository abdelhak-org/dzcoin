import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
function Features() {
  return (
    <Container
      style={{
        background: "lightblue",
        padding: "2rem 0px",
        margin: " 3rem auto",
      }}
    >
      <Card className="text-center w-100 bg-transparent ">
        <Card.Header className="p-3">Loved Products</Card.Header>
        <Card.Body>
          <Card.Title className="" style={{
            fontWeight:1000,
            fontSize:"52px",
            fontFamily: ["Dancing Script", 'cursive'],

          }}>Say hello to your <br/> DZ.Coin </Card.Title>
          <Card.Subtitle className="py-3 text-muted ">your assistant every single Day</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            veniam dolorem quibusdam voluptas voluptate tempore ipsa sit,
            eveniet eaque explicabo quaerat! Corrupti quod dolore dicta nesciunt
            deleniti ea deserunt nemo.
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
     
      </Card>
    </Container>
  );
}

export default Features;
