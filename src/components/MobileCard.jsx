import { Card  , Button , Image} from "react-bootstrap"

function MobileCard() {
  return (
    <Card
      className=" mx-auto text-center py-2 "
      style={{ width: "18rem", margin: "5px" }}
    >
      <Card.Img variant="top" src="https://source.unsplash.com/black-shelby-car-on-road-YApiWyp0lqo/" width={"100%"} alt="carImg" />
      <Card.Body>
        <Card.Title>2016 mustang gt</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
      <Card.Footer>2000 $</Card.Footer>
    </Card>
  )
}

export default MobileCard
