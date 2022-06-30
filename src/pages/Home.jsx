import React from "react";
import TypewriterComponent from "typewriter-effect";
import "../styles/home.css";
import image from "../images/profile.jpg";
import "animate.css";
export const Home = () => {
  return (
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
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("I'm Frontend Developer!")
                  .start();
              }}
            />
          </h1>

          <div className="d-flex  p-5 w-auto mt-auto w-100  ">
            <div className="accordion-body w-auto p-0 mt-auto w-100 ">
              <img src={image} alt="1" className=" ImagenPerfil " />
            </div>
          </div>
        </div>
      </div>
      <div className=" info row box  bg-danger ">
        <div className="col-12 ">
          <div className="justify-content-center d-flex ">
            <div className="text-center">
              <div className="textBio accordion-body accordion-flush ">
                <h5 className="text-center accordion-body accordion-flush ">
                  <p className=" accordion-body  accordion-flush ">
                    I'm <b>Francisco</b>
                  </p>
                  I'm 22 years old I'm from Argentina 🇦🇷 Front-End Developer Who
                  love building Digital Products.
                </h5>
                <div className=" containerIconos mx-auto mt-2  col-md-auto ">
                  <i className="fa-brands fa-react fa-3x mx-2"></i>
                  <i className="fa-brands fa-js-square  fa-3x mx-2"></i>
                  <i className="fa-brands fa-html5  fa-3x mx-2"></i>
                  <i className="fa-brands fa-css3-alt  fa-3x mx-2"></i>
                  <i className="fa-brands fa-bootstrap  fa-3x mx-2"></i>
                  <i className="fa-brands fa-sass  fa-3x mx-2"></i>
                  <i className="fa-brands fa-git-alt  fa-3x mx-2"></i>
                  <i className="fa-brands fa-github  fa-3x mx-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
