import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();
  console.log("Autenticado en LayoutPrivado:", Autenticado);
  console.log("Autenticado._id:", Autenticado._id);

  return (
    <>
      {Autenticado && Autenticado._id ? (
        <Outlet />
      ) : (
        <Navigate to="/Bienvenida" />
      )}
    </>
  );
};

export default LayoutPrivado;
