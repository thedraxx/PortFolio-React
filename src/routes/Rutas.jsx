import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "../pages";

export const Rutas = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyect" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
