import "../styles/home.css";
import "animate.css";
import image from "../images/profile.jpg";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Container } from "react-bootstrap";
export const Home = () => {
  return (
    // Aca esta es la forma de hacer una animacion con animate.css
    // Saludo de bienvenida
    <>
      <div className="container mt-auto ">
        <div className=" contenedor content  ">
          <h1 className="title animate__animated animate__bounceInRight">
            Hola!
          </h1>
          <h1 className="subtitle animate__animated animate__bounceInRight">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Un placer conocerle...")
                  .pauseFor(300)
                  .deleteAll()
                  .typeString("Soy Desarrollador Frontend!")
                  .start();
              }}
            />
          </h1>
          {/* Imagen de perfil */}
          <div className="d-flex p-5 mt-auto w-100  ">
            <div className="w-auto  mt-auto w-100 ">
              <img src={image} alt="1" className=" ImagenPerfil img-fluid " />
            </div>
          </div>
        </div>
      </div>

      <Container className="mt-auto p-auto ">
        {/* Otros */}
        <div className="contenedor-skills content border border-4 mt-auto p-4 ">
          <h1 className="texto-skills mt-auto font-weight-bold texto-skills">
            Frontend
          </h1>
          <div className="row mx-auto container-fluid">
            <img
              title="Javascript"
              src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
              alt="Javascript"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0"
            />
            <img
              title="react"
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="react"
              className="imagen  col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0 "
            />
            <img
              title="redux"
              src="https://cdn.worldvectorlogo.com/logos/redux.svg"
              alt="redux"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0 "
            />

            <img
              title="sass"
              src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
              alt="sass"
              className="imagen  col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0 "
            />
            <img
              title="styled-components"
              src="https://cdn.worldvectorlogo.com/logos/styled-components-1.svg"
              alt="styled-components"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0 "
            />
            <img
              title="bootstrap"
              src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
              alt="bootstrap"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0 "
            />
          </div>
        </div>

        {/* Otros */}
        <div className="contenedor-skills content border border-4 mt-auto p-4 ">
          <h1 className="texto-skills mt-auto font-weight-bold texto-skills">
            Otros
          </h1>
          <div className="row mx-auto container-fluid">
            <img
              title="Adobe Photoshop"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617"
              alt="Adobe Photoshop"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0"
            />
            <img
              title="Adobe Premiere"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png?20210729021549"
              alt="Adobe Premiere"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0"
            />

            <img
              title="Git"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png?20120525234412"
              alt="Git"
              className="imagen col-md-2 offset-md-0 col-sm-2 offset-sm-0 col-xs-2 offset-xs-0"
            />
          </div>
        </div>
      </Container>

      {/* Aca estan las skills */}
      <div className="info row box accordion-body p-auto m-auto ">
        <div className="col-12 ">
          <div className="justify-content-center d-flex ">
            <div className="text-center">
              <div className="textBio accordion-body ">
                <h5 className="text-footer" style={{ fontSize: "15px" }}>
                  Portafolio hecho en base a mates y React🧉 © 2022
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
