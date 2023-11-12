import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();
  console.log("Autenticado en LayoutPrivado:", Autenticado);

  return (
    <>
      {Autenticado && Autenticado._id ? (
        <Outlet />
      ) : (
        <Navigate to="/protafolioBienvenida" />
      )}
    </>
  );
};

export default LayoutPrivado;
