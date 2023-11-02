import React, { useEffect, useState } from "react";
import { Global } from "../helpers/Global";
import Estudio from "./Estudio";
import Swal from "sweetalert2";

const Resumen = () => {
  //CAPTURO EL NOMBRE DEL USUARIO INGRESADO
  let nombreUser = JSON.parse(localStorage.getItem("nombre"));
  //CREAMOS VARIABLE PARA TRAER TODOS LOS ESTUDIOS
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
  //CREACION ALERTA ELIMINAR ESTUDIO
  const eliminarEstudio = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Quieres Eliminar este Estudio?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Estudio borrado!", "Exitosamente.", "success");
      }
    });
  };
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resumen</h2>
            <p>
              Aqui encontraras algunos de mis estudios realizados a traves de mi
              carrera y profesiones.
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
                    {console.log(usuarios.fechaFin)}
                    <h3 className="resume-title">{usuarios.tipo}</h3>
                    <div className="resume-item pb-0">
                      <h4>{usuarios.detalle}</h4>
                      <p>
                        <em>Estudios Realizados</em>
                      </p>
                      <ul>
                        <li>{nombreUser.toUpperCase()}</li>
                        <li>{usuarios.fechaFin}</li>
                        <li>{usuarios.notas}</li>
                      </ul>
                      <button
                        type="button"
                        class="btn btn-info m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#estudios"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger "
                        onClick={eliminarEstudio}
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    id="estudios"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <form>
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Editar Estudios <i class="bi bi-pen"></i>
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="basic-addon1">
                                📚
                              </span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Tipo"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={usuarios.tipo}
                              />
                            </div>
                            <div class="input-group mb-3">
                              <div class="form-floating mb-3">
                                <textarea
                                  class="form-control"
                                  placeholder="Detalles"
                                  id="floatingTextareaDisabled"
                                  name="detalle"
                                  value={usuarios.detalle}
                                ></textarea>
                                <label for="floatingTextareaDisabled">
                                  Detalles del Estudio
                                </label>
                              </div>
                            </div>
                            <label htmlFor="name">Fecha de Finalizacion</label>
                            <input
                              type="date"
                              className="form-control"
                              name="fechaFin"
                              id="subject"
                              required
                              value={usuarios.fechaFin}
                            />
                            <div className="form-group">
                              <label htmlFor="name">Notas</label>
                              <select
                                class="form-select form-select-lg mb-3"
                                aria-label="Large select example"
                                name="notas"
                                value={usuarios.notas}
                              >
                                <option value="1">Aprobado</option>
                                <option value="2">No Aprovado</option>
                                <option value="2">En Proceso</option>
                              </select>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </form>
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
