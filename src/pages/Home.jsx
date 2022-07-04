import React from "react";
import TypewriterComponent from "typewriter-effect";
import "../styles/home.css";
import image from "../images/profile.jpg";
import "animate.css";
export const Home = () => {
  return (
    // Aca esta es la forma de hacer una animacion con animate.css
    // Saludo de bienvenida
    <>
      <div className="container mt-auto ">
        <div className=" contenedor content  ">
          <h1 className="title animate__animated animate__bounceInRight">
            Hello!
          </h1>
          <h1 className="subtitle animate__animated animate__bounceInRight">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Nice to meet You...")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm Frontend Developer!")
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

      {/* Aca estan las skills */}
      <div className="info row box bg-danger  ">
        <div className="col-12 ">
          <div className="justify-content-center d-flex ">
            <div className="text-center">
              <div className="textBio accordion-body accordion-flush ">
                <h5 className="text-center ">
                  <p className=" accordion-body  accordion-flush">
                    I'm <b>Francisco</b>
                  </p>
                  I'm 22 years old I'm from Argentina 🇦🇷 Front-End Developer Who
                  love building Digital Products.
                </h5>
                <p>Knowledge In: </p>
                <div className="mx-auto mt-2 col-md-auto">
                  <i className="fa-brands fa-react fa-3x mx-2 mt-auto"></i>
                  <i className="fa-brands fa-js-square  fa-3x mx-2 mt-auto"></i>
                  <i className="fa-brands fa-html5  fa-3x mx-2 mt-auto"></i>
                  <i className="fa-brands fa-css3-alt  fa-3x mx-2 mt-auto"></i>
                  <i className="fa-brands fa-bootstrap fa-3x mx-2 mt-auto"></i>
                  <i className="fa-brands fa-sass  fa-3x mx-2 mt-auto"></i>
                  <i className="fa-brands fa-git-alt fa-3x mx-2 mt-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
