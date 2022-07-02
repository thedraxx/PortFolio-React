import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Proyects, Home } from "../pages";

export const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyects" element={<Proyects />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};
