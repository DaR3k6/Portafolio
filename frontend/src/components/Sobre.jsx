import React, { Component } from "react";

const Sobre = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Sobre</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="../src/assets/img/profile.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>HTML CSS /JS PHP &amp; Desarrollador Web.</h3>
              <p className="fst-italic">Informaciones basicas sobre mi.</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Cumpleaños:</strong> <span>1 May 1995</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Nombre:</strong> <span>Usuario</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Telefono:</strong> <span>+123 456 7890</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Ciudad:</strong> <span>New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Edad:</strong>
                      <span>30</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Grado:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Correo:</strong>
                      <span>email@example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Disponible</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
