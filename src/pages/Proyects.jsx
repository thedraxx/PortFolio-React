import React from "react";
import "../styles/proyects.css";
import moviesapp from "../images/moviesapp.png";
import animelist from "../images/animelist.png";
import gif from "../images/gif.png";
import pokeapi from "../images/pokeapi.png";
import song from "../images/song.png";
import hero from "../images/hero.png";
export const Proyects = () => {
  // Aca estan algunos proyectos
  return (
    <>
      <div className="row m-5 accordion-body accordion-flush animate__animated animate__bounceInLeft ">
        {/* Primera columna */}
        <div className=" col-lg-4 mb-4 ">
          <h6 className="text-center text-truncate text-capitalize ">
            MoviesApp (check the rank of your favorite movies)
          </h6>
          <a href="https://thedraxx.github.io/Movie-App/">
            <img
              className="imgProyect w-100 mb-4 rounded "
              src={moviesapp}
              alt=""
            />
          </a>
          <h6 className="text-center text-truncate text-capitalize ">
            AnimeList API (save your favorite anime)
          </h6>
          <a href="https://thedraxx.github.io/AnimeReact/">
            <img
              className="imgProyect w-100 mb-4 rounded"
              src={animelist}
              alt=""
            />
          </a>
        </div>

        {/* Segundo columna */}
        <div className="col-lg-4 mb-4">
          <h6 className="text-center text-truncate text-capitalize ">
            Gif Generator (Generate a gif from a text)
          </h6>
          <a href="https://thedraxx.github.io/REACT--GeneratorsGif/">
            <img className="imgProyect w-100 mb-4 rounded" src={gif} alt="" />
          </a>

          <h6 className="text-center text-truncate text-capitalize ">
            Song Finder (find a song from a text)
          </h6>
          <a href="https://thedraxx.github.io/SongFinderREACT/">
            <img className="imgProyect w-100 mb-4 rounded" src={song} alt="" />
          </a>
        </div>

        <div className="col-lg-4 mb-4">
          <h6 className="text-center text-truncate text-capitalize ">
            PokeAPI (find a pokemon)
          </h6>
          <a href="https://thedraxx.github.io/PokeApi/">
            <img
              className="imgProyect w-100 mb-4 rounded"
              src={pokeapi}
              alt=""
            />
          </a>

          <h6 className="text-center text-truncate text-capitalize ">
            HeroList (search and find a hero)
          </h6>
          <a href="https://thedraxx.github.io/heroes-app-React/">
            <img className="imgProyect w-100 mb-4 rounded" src={hero} alt="" />
          </a>
        </div>
      </div>
      {/* Aca estan las skills */}
      <div className="info row box bg-danger accordion-body  ">
        <div className="col-12 ">
          <div className="justify-content-center d-flex ">
            <div className="text-center">
              <div className="textBio accordion-body ">
                <h5 className="text-footer">
                  make your dreams come true... 🧉 © 2022
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
