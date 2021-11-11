import React from "react";
import { Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";

function Footer() {
  return (
    <Row id="contact" style={{ backgroundColor: "#212529", padding: 60 }}>
      <h3 className="aboutme-header">İletişim </h3>
      <Row>
        <Col sm="12" md="6" lg="6">
          <p className="footer-text" >
            Telefon : 0543 375 30 53
          </p>
          <p className="footer-text" >
            E-Posta : canakgun5321@outlook.com
          </p>
          <p className="footer-text" >
            Adres : İstanbul/Kağıthane
          </p>
        </Col>
        {isMobile && <hr />}
        <Col sm="12" md="6" lg="6">
          <a className="footer-text" href="#about">
            Hakkımda
          </a>
          <a className="footer-text" href="#references">
            Yaptığım İşler
          </a>
          <a className="footer-text" href="#comments">
            Yorumlar
          </a>
          <a className="footer-text" href="#contact">
            İletişim
          </a>
        </Col>
      </Row>
    </Row>
  );
}

export default Footer;
