import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();
<<<<<<< HEAD
=======
  console.log("Autenticado en LayoutPrivado:", Autenticado);
  console.log("Autenticado._id:", Autenticado._id);
>>>>>>> f4cba80ea7115efaf4609464d43d63af9ef826c6

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
