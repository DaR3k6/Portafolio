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
        class="modal fade"
        id="proyecto1Edit"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Editar Proyecto<i class="bi bi-pencil-square"></i>
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
                  placeholder="Nombre Proyecto"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <div class="form-floating mb-3 text-dark">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextareaDisabled"
                  ></textarea>
                  <label for="floatingTextareaDisabled">
                    Detalles del Proyecto
                  </label>
                </div>
              </div>
              <div class="input-group mb-3">
                <label for="basic-url" class="form-label">
                  Ingresa tu URL
                </label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">
                    https://
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div class="form-text" id="basic-addon4">
                  Sitio de tu proyecto.
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button "
                class="btn btn-secondary btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
