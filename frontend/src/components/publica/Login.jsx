import React, { useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import { Navigate, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  //REDIRECCIONA
  const { form, cambiar } = HelperForm({});
  const [, setGuardado] = useState("");
  const [navLink, setnavLink] = useState(false);

  //MENSAJE DE LOS CAMPOS VACIOS
  const mostrarCamposVaciosAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Por favor complete todos los campos obligatorios.",
    });
  };

  //MENSAJE DE ERROR
  const mostrarErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  //VALIDACION DE LOS CAMPOS VACIOS
  const validarFormulario = () => {
    if (!form.email || !form.password) {
      mostrarCamposVaciosAlert();
      return false;
    }
    return true;
  };

  const guardarLogin = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    let nuevoPerfil = form;

    try {
      const request = await fetch(Global.url + "/personal/login", {
        method: "POST",
        body: JSON.stringify(nuevoPerfil),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await request.json();
      if (data.status === true) {
        //MENSAJE EXITOSO
        // localStorage.setItem("token", data.usuario.token);
        localStorage.setItem("email", JSON.stringify(data.usuario.email));
        // localStorage.setItem("id", JSON.stringify(data.usuario.id));
        localStorage.setItem("genero", data.usuario.genero);
        localStorage.setItem("telefono", data.usuario.telefono);
        localStorage.setItem("direccion", data.usuario.direccion);
        localStorage.setItem("fechaNacimiento", data.usuario.fechaNacimiento);
        localStorage.setItem("apellido", data.usuario.apellido);

        setGuardado("Guardado");
        Swal.fire({
          icon: "success",
          title: "Login exitoso",
          text: "¡Te logeaste completamente con éxito!",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          setnavLink(true);
        });
      } else {
        //MENSAJE DE ERROR
        setGuardado("Error");
        mostrarErrorAlert(data.mensaje);
      }
    } catch (error) {
      //MENSAJE SI HAY PROBLEMA DEL SERVIDOR
      mostrarErrorAlert(
        "Algo salió mal. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  if (navLink) {
    return <Navigate to="/Bienvenida" />;
  }

  return (
    <>
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">
                    Inicio Sesion
                    <i className="bi bi-box-arrow-in-right"></i>
                  </h2>

                  <form onSubmit={guardarLogin}>
                    <div className="row">
                      <div className="col-md-6 mb-4"></div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        onChange={cambiar}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Correo Electronico
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="password"
                        onChange={cambiar}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Contraseña
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Notificar a tu Correo
                      </label>
                    </div>

                    <div className="text-center d-grid gap-2 col-6 mx-auto  ">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg rounded-pill mb-3"
                      >
                        Ingresar
                      </button>
                      <p>Registrate Aquí:</p>
                      <NavLink
                        to="/Registro"
                        className="btn btn-info btn-lg btn-block rounded-pill"
                      >
                        Registrarse
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
