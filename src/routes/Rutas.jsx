import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

export const Rutas = () => {
  return (
    <div>
      <Routes>
        {/* Pnatalla principal */}
        <Route path="/" element={<Home />} />
        {/* Pantalla de Proyectos */}
        {/* <Route path="/proyects" element={} /> */}
        {/* Proteccion de la app, si escribis cualquier cosa te manda al home */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  )
}
