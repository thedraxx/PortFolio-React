import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export const Navigator = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">PortFolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Proyects</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
          <Nav.Link href="#home">
            <i className="fa-solid fa-moon" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
