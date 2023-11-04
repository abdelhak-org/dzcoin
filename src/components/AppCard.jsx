import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
function AppCard({src , title }) {
  return (
    <Card
      className=" mx-auto text-center py-2 "
      style={{ width: "18rem", margin: "5px" }}
    >
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default AppCard;
