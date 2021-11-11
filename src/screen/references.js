import React from "react";
import { Row, Carousel } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import BackGroundImage from "../images/background-gray.jpg";

function References() {
  return (
    <Row id="references">
      <hr />
      <h2 className="about-header">Yaptığım İşler </h2>
      <Carousel>
        <Carousel.Item style={!isMobile ? { height: 400 } : {}}>
          <img
            className="d-block w-100"
            src={BackGroundImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={!isMobile ? { height: 400 } : {}}>
          <img
            className="d-block w-100"
            src={BackGroundImage}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={!isMobile ? { height: 400 } : {}}>
          <img
            className="d-block w-100"
            src={BackGroundImage}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
}

export default References;
