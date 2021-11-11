import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import MyImage from "../images/canakgun.jpeg";
import { isMobile } from "react-device-detect";

function AboutMe() {
  return (
    <Row style={{ backgroundColor: "#212529", padding: 60 }}>
      <Col sm="12" md="7" lg="7" style={{ paddingLeft: isMobile ? 30 : 100 }}>
        <h1 className="aboutme-header">Merhaba </h1>
        <h1 className="aboutme-header">Ben, </h1>
        <h1 className="aboutme-header">Can Akgün</h1>
        <h5 className="aboutme-header aboutme-header-italic">Frontend Developer</h5>
      </Col>
      <Col sm="12" md="5" lg="5" className="text-center">
        <Image src={MyImage} className="center" width={250} rounded />
      </Col>
    </Row>
  );
}

export default AboutMe;
