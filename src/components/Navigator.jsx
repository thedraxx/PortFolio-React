import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../store/slice/mode/modeActiveSlice";
import { Link } from "react-router-dom";
import "../styles/global.css";

// El navbar
export const Navigator = () => {
  // Usamos uso de useDispatch para poder acceder al dispatch
  const dispatch = useDispatch();

  //Usamos UseSelector para obtener el estado de la aplicación
  const { active } = useSelector((state) => state.isActive);

  return (
    <Navbar>
      <Container>
        {/* GracIas al useSelector podemos revisar el estado de la aplicacion y cambiar a modo oscuro o claro */}
        <Navbar.Brand className={!active ? "text-dark" : "text-light"}>
          PortFolio
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <Link
            to="/"
            className={` links ${!active ? "text-dark" : "text-light"}`}
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            to="/proyects"
            className={` links ${!active ? "text-dark" : "text-light"}`}
            style={{ textDecoration: "none" }}
          >
            Proyects
          </Link>

          <Nav.Link
            style={{
              color: `${!active ? "black" : "white"}`,
              textDecoration: "none",
            }}
            //  Cuando hacemos click en el boton cambiamos el estado de la aplicacion
            // Hacemos uso del dispatch para cambiar el estado de la aplicacion ya que se usa redux
            onClick={() => dispatch(setActive())}
          >
            {/* Si active es true es oscuro sino es claro */}
            {/* Cambiamos el icono dependiendo de como esta active */}
            {!active ? (
              <i className="fa-solid fa-moon fa-1x " />
            ) : (
              <i className="fa-solid fa-sun fa-1x" />
            )}
          </Nav.Link>
          <Nav.Link
            href="https://github.com/thedraxx"
            className="Redirect"
            style={{
              color: `${!active ? "black" : "white"}`,
              textDecoration: "none",
            }}
          >
            {" "}
            <i className="fa-brands fa-github fa-1x mx-2 mt-auto"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/cerranofrancisco/"
            className="Redirect"
            style={{
              color: `${!active ? "black" : "white"}`,
              textDecoration: "none",
            }}
          >
            {" "}
            <i className="fa-brands fa-linkedin fa-1x mx-2 mt-auto"></i>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
