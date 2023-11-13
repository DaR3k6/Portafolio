import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//DIVISION DE CARPETAS PRIVADAS Y PUBLICAS
import Login from "../components/publica/Login";
import Inicio from "../components/privada/Inicio";
import Register from "../components/publica/Register";
import { AuthProvider } from "../components/context/AuthProvier";
import LayoutPublico from "../components/publica/LayoutPublico";
import LayoutPrivado from "../components/privada/LayoutPrivada";
import Error from "../components/error/Error";

const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/*Rutas publicas*/}
          <Route path="/" element={<LayoutPublico />}>
            <Route index element={<Login />} />
            <Route path="/Registro" element={<Register />} />
          </Route>

          {/*Rutas privadas*/}
          <Route>
            <Route path="/Bienvenida/" element={<LayoutPrivado />}>
              <Route index element={<Inicio />} />
            </Route>
          </Route>

          {/*Rutas Error*/}
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;
