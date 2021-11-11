import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./screen/aboutme";
import "./App.css";
import Footer from "./screen/footer";
import Comments from "./screen/comments";
import About from "./screen/about";
import References from "./screen/references";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">Can Akgün</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">Hakkımda</Nav.Link>
              <Nav.Link href="#references">Yaptığım İşler</Nav.Link>
              <Nav.Link href="#comments">Yorumlar</Nav.Link>
              <Nav.Link href="#contact">İletişim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid style={{ marginTop: 55 }}>
        <AboutMe />
        <About />
        <References />
        <Comments />
        <Footer />
      </Container>
    </>
  );
}

export default App;
