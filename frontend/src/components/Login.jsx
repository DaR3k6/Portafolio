import React, { useState } from "react";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//funcion
const Login = () => {
  //redirecciona
  const navigate = useNavigate();
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");
  const guardarPerfil = async (e) => {
    e.preventDefault();
    //lega al objeto generado por el helper
    let nuevoPerfil = form;

    //guardar en la api
    const request = await fetch(Global.url + "/personal/login", {
      method: "POST",
      body: JSON.stringify(nuevoPerfil),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.status == true) {
      setGuardado("Guardado");
      navigate("/Inicio");
    } else {
      setGuardado("Error");
    }
  };

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
                  {guardado == "Guardado" ? (
                    <div className="alert alert-info" role="alert">
                      Login Exitoso!
                    </div>
                  ) : (
                    ""
                  )}
                  {guardado == "Error" ? (
                    <div className="alert alert-danger" role="alert">
                      Error en la Consulta
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={guardarPerfil}>
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

                    <button type="submit" class="btn btn-primary">
                      Ingresar
                    </button>

                    <div className="text-center">
                      <p>o Registrate Aqui:</p>
                      <a
                        type="button"
                        href="/Register"
                        className="btn btn-info btn-block mb-4"
                      >
                        Registrarse
                      </a>
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
