import React from "react";
import { useState, useEffect, createContext } from "react";
import { Global } from "../../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Autenticado, setAutenticado] = useState({});

  useEffect(() => {
    autenticarUsuario();
  }, []);
  console.log(Autenticado);
  const autenticarUsuario = async () => {
    const usuario = localStorage.getItem("usuario");

    try {
      const userObj = JSON.parse(usuario);
      console.log(userObj);
      if (!userObj.token || !userObj.nombre) {
        return false;
      }
      const request = await fetch(
        Global.url + "/personal/informacion/" + userObj.id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: userObj.token,
          },
        }
      );

      console.log(request);

      if (!request.ok) {
        console.error("Error en la autenticación:", response.statusText);
        return;
      }
      const data = await request.json();
      setAutenticado(data.datos);
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ Autenticado, setAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
