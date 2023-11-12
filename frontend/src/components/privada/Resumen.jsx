import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import Swal from "sweetalert2";
import HelperForm from "../../helpers/HelperForm";

const Resumen = () => {
  //variable para capturar el estado de la consulta
  //let contenido;
  //CAPTURO EL NOMBRE DEL USUARIO INGRESADO
  let nombreUser = JSON.parse(localStorage.getItem("nombre"));

  //CREAMOS VARIABLE PARA TRAER TODOS LOS ESTUDIOS
  const [usuario, setUsuario] = useState([]);
  const [estado, setEstado] = useState(null);
  const [estudios, setEstudios] = useState(null);
  const { form, cambiar } = HelperForm({});
  const [estudioId, setEstudioId] = useState([]);
  const [estadoId, setEstadoId] = useState([]);

  //TRAE TODOS LOS ESTUDIOS
  fetch(Global.url + "/estududios/historialUsuario", {
    method: "GET",
  })
    .then(response => {
      return response.json();
    }) // Manejo de la promesa
    .then(data => {
      //console.log("DATOS DEL FECHT" + data);
      //console.log("LA DATA ES: " + data.status);
      //console.log(estado);
      setEstudios(data.datos);
      setEstado(data.status);
    })
    .catch(error => {
      console.error("Error al obtener datos:", error);
    });

  //CREACION ALERTA ELIMINAR ESTUDIO
  const eliminarEstudio = id => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Quieres Eliminar este Estudio?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then(result => {
      if (result.isConfirmed) {
        //TRAE TODOS LOS ESTUDIOS
        fetch(Global.url + `/estudios/eliminar/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            setUsuario(data.datos);
          })
          .catch(error => {
            console.error("Error al obtener datos:", error);
          });
        Swal.fire("Estudio borrado!", "Exitosamente.", "success");
        navigate("/Inicio");
      }
    });
  };

  //PARTE DE EDICION DEL ESTUDIO
  const guardarEstudio = async (e, id) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }

    let nuevoEstudio = form;
    try {
      Swal.fire({
        title: "Estas seguro?",
        text: "Quieres Editar el Estudio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Editar!",
      }).then(result => {
        if (result.isConfirmed) {
          //TRAE TODOS LOS ESTUDIOS
          fetch(Global.url + `/estudios/actualizar/${id}`, {
            method: "PUT",
            body: JSON.stringify(nuevoEstudio),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(response => response.json())
            .then(data => {
              setUsuario(data.datos);
            })
            .catch(error => {
              console.error("Error al obtener datos:", error);
            });
          Swal.fire("Estudio borrado!", "Exitosamente.", "success");
          navigate("/Inicio");
        }
      });
    } catch (error) {
      //MENSAJE SI HAY PROBLEMA DEL SERVIDOR
      mostrarErrorAlert(
        "Algo salió mal. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  //TRAER INFORMACION DE UN USUARIO
  const traerEstudioID = id => {
    console.log(id);
    fetch(Global.url + `/estudios/historial/${id}`, {
      method: "GET",
    })
      .then(response => {
        return response.json();
      }) // Manejo de la promesa
      .then(data => {
        setEstudioId(data.datos);
        setEstadoId(data.status);
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
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
            {estado == true ? (
              estudios.map(estudio => {
                return (
                  <>
                    <div
                      key={estudio._id}
                      className="col-lg-6"
                      data-aos="fade-up"
                    >
                      <h3 className="resume-title">{estudio.tipo}</h3>
                      <div className="resume-item pb-0">
                        <h4>{estudio.detalle}</h4>
                        <p>
                          <em>Estudios Realizados</em>
                        </p>
                        <ul>
                          <li hidden id="idBorrar">
                            {estudio._id}
                          </li>
                          <li>{nombreUser.toUpperCase()}</li>
                          <li>{estudio.fechaFin.slice(0, 10)}</li>
                          <li>
                            {estudio.notas == "1" ? (
                              <li>Aprovado</li>
                            ) : (
                              <>
                                <li>No Aprovado</li>
                              </>
                            )}
                            {estudio.notas == "3" ? <li>En proceso</li> : <></>}
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="btn btn-info m-2"
                          data-bs-toggle="modal"
                          data-bs-target="#estudios"
                          onClick={() => {
                            traerEstudioID(estudio._id);
                          }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger "
                          onClick={() => {
                            eliminarEstudio(estudio.id);
                          }}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <h2>No hay Estudios Agregados</h2>
              </>
            )}
          </div>
        </div>
      </section>
      {/* {estadoId == true ? (
        estudioId.map((estudios) => {
          return (
            <div className="modal-dialog">
              <form onSubmit={guardarEstudio}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 hidden>{estudios._id}</h1>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Editar Estudios <i className="bi bi-pen"></i>
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        📚
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tipo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        valueDefault={estudios.tipo}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          placeholder="Detalles"
                          id="floatingTextareaDisabled"
                          name="detalle"
                          valueDefault={estudios.detalle}
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
                      valueDefault={estudios.fechaFin}
                    />
                    <div className="form-group">
                      <label htmlFor="name">Notas</label>
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label="Large select example"
                        name="notas"
                        valueDefault={estudios.notas}
                      >
                        <option value="1">Aprobado</option>
                        <option value="2">No Aprovado</option>
                        <option value="3">En Proceso</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          );
        })
      ) : (
        <>
          <h1>vacio</h1>
        </>
      )} */}
      <div
        className="modal fade"
        id="estudios"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* modal */}
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h1 hidden></h1>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Editar Estudios <i className="bi bi-pen"></i>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    📚
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tipo"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Detalles"
                      id="floatingTextareaDisabled"
                      name="detalle"
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
                />
                <div className="form-group">
                  <label htmlFor="name">Notas</label>
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                    name="notas"
                  >
                    <option value="1">Aprobado</option>
                    <option value="2">No Aprovado</option>
                    <option value="3">En Proceso</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Resumen;
