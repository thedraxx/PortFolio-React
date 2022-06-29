import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../store/slice/mode/modeActiveSlice";

export const Navigator = () => {
  // Usamos uso de useDispatch para poder acceder al dispatch
  const dispatch = useDispatch();

  //Usamos UseSelector para obtener el estado de la aplicación
  const { active } = useSelector((state) => state.isActive);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand className={!active ? "text-light" : "text-dark"}>
          PortFolio
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Proyects</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
          <Nav.Link onClick={() => dispatch(setActive())}>
            {/* Si active es true es oscuro sino es claro */}
            {!active ? (
              <i className="fa-solid fa-moon" />
            ) : (
              <i className="fa-solid fa-sun" />
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
