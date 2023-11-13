import React from "react";
import { useState, useEffect, createContext } from "react";
import { Global } from "../../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Autenticado, setAutenticado] = useState({});
  useEffect(() => {
    autenticarUsuario();
  }, []);

  /**
   * Compara que el token sea valido
   * @returns objeto serializado de la comparacion de localstorage vs api
   */
  const autenticarUsuario = async () => {
    //obtener datos del usuario logueado
    const token = localStorage.getItem("token");
    const idUsuario = localStorage.getItem("id");

    // validamos que los datos existan en el localstorage
    if (!token || !idUsuario) {
      return false;
    }
    try {
      // si existen los transformamos en objeto javascript para manipular el ID del usuario
      const userObj = JSON.parse(idUsuario);

      // Comprobacion del token del localstorage vs el del Backend
      const request = await fetch(
        Global.url + "/personal/informacion/" + userObj,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

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
