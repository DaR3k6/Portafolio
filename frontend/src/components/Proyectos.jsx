import React, { useEffect, useState } from "react";
import ModalAgregar from "../components/ModalAgregar.jsx";
import { Global } from "../helpers/Global";

const Proyectos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [proyectos, setProyectos] = useState([]);

  //MUESTRA EL MODAL DE AGREGAR
  const abrirModal = () => {
    setMostrarModal(true);
  };

  //AGREGA EL MODAL A LA LISTA DESPUES LO MUESTRA
  const agregarProyecto = nuevoProyecto => {
    setProyectos([...proyectos, nuevoProyecto]);

    setMostrarModal(false);
  };

  // MUESTRA TODOS LOS PROYECTOS
  useEffect(() => {
    fetch(Global.url + "/proyectos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        // Almacena los proyectos en el estado
        setProyectos(data.datos);
      })
      .catch(error => {
        console.error("Error al cargar proyectos:", error);
      });
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>
              Proyectos <i class="bi bi-book"></i>
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
                    />
                    <div className="portfolio-links">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#proyecto1Edit"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
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

        {mostrarModal && <ModalAgregar proyectoAgreado={agregarProyecto} />}
      </section>
    </>
  );
};

export default Proyectos;
