import React, { useState, useEffect } from "react";
import "../assets/js/main";
//IMPORTAMOS TODOS LOS COMPONENTES DE LA PAGINA
import Header from "./Header";
import Estudio from "./Estudio";
import Sobre from "./Sobre";
import Hechos from "./Hechos";
import Habilidades from "./Habilidades";
import Resumen from "./Resumen";
import Proyectos from "./Proyectos";
import Servicies from "./Servicies";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import Footer from "./Footer";
const Inicio = () => {
  //CAPTURAMOS EL ID USUARIOS
  // const [datos,setDatos] = useState(
  // []
  // )
  // useEffect(() => {
  //   const token = Json.parse(localStorage.getItem("token"));
  //   console.log(token);
  // });

  return (
    <>
      <Header />
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Usuario</h1>
          <p>
            Soy Experto en Apis y MER.
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>

      <main id="main">
        <Estudio />
        <Sobre />
        <Hechos />
        <Habilidades />
        <Resumen />
        <Proyectos />
        <Servicies />
        <Testimonios />
        <Contacto />
      </main>
      <footer id="footer">
        <Footer />
      </footer>

      {/* modales */}

      {/* edicion productos modal */}
      <div
        className="modal fade"
        id="proyecto1Edit"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editar Proyecto<i className="bi bi-pencil-square"></i>
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
                  placeholder="Nombre Proyecto"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <div className="form-floating mb-3 text-dark">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextareaDisabled"
                  ></textarea>
                  <label htmlFor="floatingTextareaDisabled">
                    Detalles del Proyecto
                  </label>
                </div>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="basic-url" className="form-label">
                  Ingresa tu URL
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    https://
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="form-text" id="basic-addon4">
                  Sitio de tu proyecto.
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-secondary btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
