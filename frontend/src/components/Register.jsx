import React, { useState } from "react";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//funcion
const Register = () => {
  //redirecciona
  const navigate = useNavigate();
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");
  const guardarPerfil = async (e) => {
    e.preventDefault();
    //lega al objeto generado por el helper
    let nuevoPerfil = form;

    //guardar en la api
    const request = await fetch(Global.url + "/personal/registrando", {
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
      <section
        className="vh-90 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px;" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Crea tu Cuenta
                      <i class="bi bi-person-badge"></i>
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
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          name="apodo"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Apodo
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          name="nombre"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Nombre
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          name="apellido"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Apellido
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="Date"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          name="fechaNace"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Fecha Nacimiento
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="direccion"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Direcccion
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="email"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Correo Electronico
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="telefono"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Telefono
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="genero"
                          onChange={cambiar}
                        >
                          <option selected></option>
                          <option value="1">Hombre</option>
                          <option value="2">Mujer</option>
                          <option value="3">Otro</option>
                        </select>
                        <label className="form-label" htmlFor="form3Example3cg">
                          Genero
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          name="password"
                          onChange={cambiar}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Contraseña
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          Acepto los terminos y condiciones{" "}
                          <a href="#!" className="text-body">
                            <u>Terminos y Servicios</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <a href="#">
                          <button
                            type="submit"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            Registrar
                          </button>
                        </a>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Ya estas Registrado?{" "}
                        <a href="/" className="fw-bold text-body">
                          <u>Ingresa Aqui!</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
