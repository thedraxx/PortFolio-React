import React from "react";
import TypewriterComponent from "typewriter-effect";
import "../styles/home.css";
export const Home = () => {
  return (
    <div className="container">
      <div className="content">
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
      </div>
    </div>
  );
};
