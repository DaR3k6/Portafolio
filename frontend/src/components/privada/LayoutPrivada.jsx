import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();

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
