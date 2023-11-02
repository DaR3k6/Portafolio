import React, { useEffect, useState } from "react";
import { Global } from "../helpers/Global";
import Estudio from "./Estudio";

const Resumen = () => {
  //CAPTURO EL NOMBRE DEL USUARIO INGRESADO
  let nombreUser = JSON.parse(localStorage.getItem("nombre"));
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    fetch(Global.url + "/estududios/historialUsuario", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // Manejo de la promesa
      .then((data) => {
        console.log(data);
        setUsuario(data.datos);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resumen</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            {usuario.map((usuarios) => {
              return (
                <>
                  <div
                    key={usuarios._id}
                    className="col-lg-6"
                    data-aos="fade-up"
                  >
                    {
                      /* RECCORRO CON UN CLICO PARA TRAER TODOS LOS ESTUDIOS */ console.log(
                        usuarios.fechaFin
                      )
                    }
                    <h3 className="resume-title">Estudios</h3>
                    <div className="resume-item pb-0">
                      <h4>{usuarios.detalle}</h4>
                      <p>
                        <em>{usuarios.tipo}</em>
                      </p>
                      <ul>
                        <li>{nombreUser.toUpperCase()}</li>
                        <li>{usuarios.fechaFin}</li>
                        <li>{usuarios.notas}</li>
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resumen;
