import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Proyects, Home } from "../pages";

export const Rutas = () => {
  return (
    <div>
      <Routes>
        {/* Pnatalla principal */}
        <Route path="/" element={<Home />} />
        {/* Pantalla de Proyectos */}
        <Route path="/proyects" element={<Proyects />} />
        {/* Proteccion de la app, si escribis cualquier cosa te manda al home */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};
