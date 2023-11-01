import React, { useState } from "react";
import img1 from "../assets/img/fondostudy.png";
import img2 from "../assets/img/fondo2.png";
const Estudio = () => {
  return (
    <>
      <section id="estudio" className="estudio">
        <div className="container">
          <div className="section-title">
            <h2>
              Agregar Estudios<i class="bi bi-highlighter"></i>
            </h2>
            <p>
              En esta seccion podras agregar los estudios que has cursado a lo
              largo de tu carrera para que las demas personas lo vean y puedan
              llamarte y contratarte para un proyecto que ellos tengan y fianzar
              un contraro.
            </p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info w-100 tex-center">
                <img src={img1} alt="" className="img-fluid " />
                <img src={img2} alt="" className="img-fluid " />
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Tipo del Estudio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tipo"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Detalles</label>
                  <textarea
                    className="form-control"
                    name="detalle"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Fecha de Finalizacion</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaFin"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Notas</label>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                    name="notas"
                  >
                    <option value="1">Aprobado</option>
                    <option value="2">No Aprovado</option>
                    <option value="2">En Proceso</option>
                  </select>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Agregar Estudio</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estudio;
