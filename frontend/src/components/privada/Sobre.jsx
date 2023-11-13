import React, { Component } from "react";

const Sobre = () => {
  let nombreUser = JSON.parse(localStorage.getItem("nombre"));
  let generoUser = localStorage.getItem("genero");
  let fechaNace = localStorage.getItem("fechaNacimiento");
  let email = localStorage.getItem("email");
  let phone = localStorage.getItem("telefono");
  let direccion = localStorage.getItem("direccion");
  let apellido = localStorage.getItem("apellido");
  let array = fechaNace.split("T");
  let fecha = array[0].slice(1, 11);
  //console.log(fecha);

  let genero = "";
  if (generoUser == 1) {
    genero = "Hombre";
  } else if (generoUser == 2) {
    genero = "Mujer";
  } else if (generoUser == 3) {
    genero = "CatMan";
  }
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
                      <strong>Cumpleaños:</strong> <span>{fecha}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Nombre:</strong> <span>{nombreUser}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Telefono:</strong> <span>{phone}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Direccion:</strong> <span>{direccion}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Edad:</strong>
                      <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Apellido:</strong> <span>{apellido}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Correo:</strong>
                      <span>{email}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Genero:</strong> <span>{genero}</span>
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
