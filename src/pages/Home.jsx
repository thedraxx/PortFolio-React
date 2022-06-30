import React from "react";
import TypewriterComponent from "typewriter-effect";
import "../styles/home.css";
import image from "../images/profile.jpg";
export const Home = () => {
  return (
    <div className=" ConteinerGeneral container mt-auto ">
      <div className=" contenedor content ">
        <h1 className="title">Hello!</h1>
        <h1 className="subtitle">
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
            <img
              src={image}
              alt="1"
              className=" ImagenPerfil accordion-button   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
