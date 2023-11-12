import React, { useEffect, useState } from "react";
import ModalAgregar from "../../components/privada/ModalAgregar.jsx";
import ModalEditar from "../../components/privada/ModalEditar.jsx";
import { Global } from "../../helpers/Global";
import Swal from "sweetalert2";

const Proyectos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [proyectos, setProyectos] = useState([]);
  const [proyectoEditando, setProyectoEditando] = useState(null);

  //MODAL PARA AGREGAR
  const abrirModal = () => {
    setMostrarModal(true);
  };

  const agregarProyecto = () => {
    setMostrarModal(false);
  };

  //MODAL PARA EDITAR
  const abrirModalEditar = proyecto => {
    if (proyecto && proyecto.nombre && proyecto.detalle && proyecto.link) {
      setProyectoEditando(proyecto);
      setModalEditar(true);
    } else {
      console.error("El proyecto no tiene la información necesaria.");
    }
  };

  const agregarModalEditar = () => {
    setModalEditar(false);
  };

  const cargarProyectos = async () => {
    await fetch(Global.url + "/proyectos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        setProyectos(data.datos);
      })
      .catch(error => {
        console.error("Error al cargar proyectos:", error);
      });
  };

  //CREACION ALERTA ELIMINAR PROYECTO
  const eliminarProyecto = id => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Quieres Eliminar este Proyecto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      showConfirmButton: true,
    }).then(result => {
      if (result.isConfirmed) {
        //TRAE TODOS LOS PROYECTO
        fetch(Global.url + `/proyecto/eliminar/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            // Cambia esta línea a setProyectos en lugar de setUsuario
            setProyectos(data.datos);
          })
          .catch(error => {
            console.error("Error al obtener datos:", error);
          });
        Swal.fire("Proyecto borrado!", "Exitosamente.", "success");

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };

  useEffect(() => {
    cargarProyectos();
  }, [modalEditar]);

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>
              Proyectos <i className="bi bi-book"></i>
            </h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  Todo
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Tarjeta</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="../src/assets/img/portfolio/img1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#proyecto1"
                    onClick={abrirModal}
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            {proyectos && proyectos.length > 0 ? (
              proyectos.map(proyecto => (
                <div
                  key={proyecto._id}
                  className="col-lg-4 col-md-6 portfolio-item filter-web"
                >
                  <div className="portfolio-wrap">
                    <img
                      src="../src/assets/img/portfolio/img2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-links">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target={`#modalEditar${proyecto._id}`}
                        onClick={() => abrirModalEditar(proyecto)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a
                        href="#"
                        title="More Details"
                        onClick={() => {
                          eliminarProyecto(proyecto.id);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay proyectos disponibles.</p>
            )}
          </div>
        </div>
        {mostrarModal && <ModalAgregar proyectoAgregado={agregarProyecto} />}
        {modalEditar && proyectoEditando && (
          <ModalEditar
            nombre={proyectoEditando.nombre}
            descripcion={proyectoEditando.detalle}
            link={proyectoEditando.link}
            id={proyectoEditando._id}
            proyectoEditado={agregarModalEditar}
          />
        )}
      </section>
    </>
  );
};

export default Proyectos;
