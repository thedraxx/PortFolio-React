import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../store/slice/mode/modeActiveSlice";
import { Link } from "react-router-dom";
export const Navigator = () => {
  // Usamos uso de useDispatch para poder acceder al dispatch
  const dispatch = useDispatch();

  //Usamos UseSelector para obtener el estado de la aplicación
  const { active } = useSelector((state) => state.isActive);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand className={!active ? "text-dark" : "text-light"}>
          PortFolio
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/proyects" className="links">
            Proyects
          </Link>
          <Link to="/Contact" className="links">
            Contact
          </Link>
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
