import React from "react";
import "../styles/proyects.css";
import cripto from "../images/cripto.png";
import animelist from "../images/animelist.png";
import gif from "../images/gif.png";
import pokeapi from "../images/pokeapi.png";
import song from "../images/song.png";
import hero from "../images/hero.png";

export const Proyects = () => {
  return (
    <>
      <div className="row m-5 accordion-body accordion-flush animate__animated animate__bounceInLeft ">
        {/* Primera columna */}
        <div className=" col-lg-4 mb-4 ">
          <h6 className="text-center text-truncate text-capitalize ">
            Crypto Currency (check the price of any cryptocurrency)
          </h6>
          <img className="imgProyect w-100 mb-4 rounded " src={cripto} alt="" />
          <h6 className="text-center text-truncate text-capitalize ">
            AnimeList API (save your favorite anime)
          </h6>
          <img
            className="imgProyect w-100 mb-4 rounded"
            src={animelist}
            alt=""
          />
        </div>

        {/* Segundo columna */}
        <div className="col-lg-4 mb-4">
          <h6 className="text-center text-truncate text-capitalize ">
            Gif Generator (Generate a gif from a text)
          </h6>
          <img className="imgProyect w-100 mb-4 rounded" src={gif} alt="" />
          <h6 className="text-center text-truncate text-capitalize ">
            Song Finder (find a song from a text)
          </h6>
          <img className="imgProyect w-100 mb-4 rounded" src={song} alt="" />
        </div>

        <div className="col-lg-4 mb-4">
          <h6 className="text-center text-truncate text-capitalize ">
            PokeAPI (find a pokemon)
          </h6>
          <img className="imgProyect w-100 mb-4 rounded" src={pokeapi} alt="" />
          <h6 className="text-center text-truncate text-capitalize ">
            HeroList (search and find a hero)
          </h6>
          <img className="imgProyect w-100 mb-4 rounded" src={hero} alt="" />
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
                <div className="containerIconos mx-auto mt-2 col-md-auto">
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
