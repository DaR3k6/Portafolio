import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import Swal from "sweetalert2";
import ErrorStudy from "../error/ErrorStudy";
import ModalEstudioEditar from "./modales/ModalEstudioEditar";
const Resumen = ({ Autenticado }) => {
  //CAPUTRO EL TOKEN
  const token = localStorage.getItem("token");

  //CREAMOS ESTADOS PARA TRAER TODOS LOS ESTUDIOS
  const [estado, setEstado] = useState(null);
  const [estudios, setEstudios] = useState(null);

  const [modalEditar, setModalEditar] = useState(false);
  const [estudioEditando, setEstudioEditando] = useState(null);

  //MODAL PARA EDITAR
  const abrirModalEditar = estudio => {
    if (estudio && estudio.detalle && estudio.fechaFin && estudio.notas) {
      setEstudioEditando(estudio);
      setModalEditar(true);
    } else {
      console.error("El estudio no tiene la información necesaria.");
      console.log("Propiedades del estudio:", estudio);
    }
  };

  //AGREGAR
  const agregarModalEditar = () => {
    setModalEditar(false);
  };

  //TRAE TODOS LOS ESTUDIOS
  const cargarEstudio = async () => {
    fetch(Global.url + "/estududios/historialUsuario", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setEstudios(data.datos);
        setEstado(data.status);
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  };

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
            Authorization: token,
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
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  useEffect(() => {
    cargarEstudio();
  }, [modalEditar]);

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
                          <li>{Autenticado.nombre.toUpperCase()}</li>
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
                          data-bs-target={`#editarEstudio${estudio._id}`}
                          onClick={() => abrirModalEditar(estudio)}
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
                <ErrorStudy />
              </>
            )}
          </div>
        </div>
        {modalEditar && estudioEditando && (
          <ModalEstudioEditar
            tipo={estudioEditando.tipo}
            detalle={estudioEditando.detalle}
            fecha={estudioEditando.fechaFin}
            notas={estudioEditando.notas}
            id={estudioEditando._id}
            token={token}
            estudioEditado={agregarModalEditar}
          />
        )}
      </section>
    </>
  );
};

export default Resumen;
