import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//DIVISION DE CARPETAS PRIVADAS Y PUBLICAS
import Login from "../components/publica/Login";
import Inicio from "../components/privada/Inicio";
import Register from "../components/publica/Register";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
