import React, { Component } from "react";

const Hechos = ({ Autenticado }) => {
  return (
    <>
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Hechos Realizado</h2>
            <p>Con esto podras ver mis servicios y en todo lo que me destaco</p>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Clientes Felices</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Projectos</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Nuestro Soporte</strong>
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="count-box">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Trabajadores Duros</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hechos;
