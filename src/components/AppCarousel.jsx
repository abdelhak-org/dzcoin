import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            src="https://picsum.photos/1320/400"
            thumbnail
            text="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://picsum.photos/1320/400"
            thumbnail
            text="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://picsum.photos/1320/400"
            thumbnail
            text="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
