import React from "react";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../../Sources/Images/Tajoura-3.jpg";
import car2 from "../../Sources/Images/Tajoura-4.jpg";
import car3 from "../../Sources/Images/Tajoura-5.jpg";

function Carusal() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="730px"
            src={car1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="730px"
            src={car2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="730px"
            src={car3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carusal;
