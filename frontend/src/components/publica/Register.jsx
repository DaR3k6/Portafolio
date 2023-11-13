import React, { useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [enviarEmail, setEmail] = useState(false);
  const { form, cambiar } = HelperForm({});
  const [, setGuardado] = useState("");

  //MENSAJE DE LOS CAMPOS VACIOS
  const mostrarCamposVaciosAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Por favor complete todos los campos obligatorios.",
    });
  };

  //MENSAJE DE ERROR
  const mostrarErrorAlert = message => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  //VALIDACION DEL FORMULARIO
  const validarFormulario = () => {
    if (!form.apodo || !form.nombre || !form.email || !form.password) {
      mostrarCamposVaciosAlert();
      return false;
    }
    return true;
  };

  const guardarRegistro = async e => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    let nuevoPerfil = { ...form, enviarEmail };
    console.log(nuevoPerfil);
    try {
      const response = await fetch(Global.url + "/personal/registrando", {
        method: "POST",
        body: JSON.stringify(nuevoPerfil),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.status === true) {
        //MENSAJE EXITOSO
        setGuardado("Guardado");
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "¡Tu registro se ha completado con éxito!",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
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
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Crea tu Cuenta <i className="bi bi-person-badge"></i>
                    </h2>

                    <form onSubmit={guardarRegistro}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="apodo"
                          onChange={cambiar}
                          placeholder="Apodo"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="nombre"
                          onChange={cambiar}
                          placeholder="Nombre"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="apellido"
                          onChange={cambiar}
                          placeholder="Apellido"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="Date"
                          className="form-control form-control-lg"
                          name="fechaNace"
                          onChange={cambiar}
                          placeholder="Fecha Nacimiento"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="direccion"
                          onChange={cambiar}
                          placeholder="Direccion"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          onChange={cambiar}
                          placeholder="Correo Electronico"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="telefono"
                          onChange={cambiar}
                          placeholder="Telefono"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="genero"
                          onChange={cambiar}
                        >
                          <option>Seleccione</option>
                          <option value="1">Hombre</option>
                          <option value="2">Mujer</option>
                          <option value="3">Otro</option>
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          name="password"
                          onChange={cambiar}
                          placeholder="Contraseña"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value={enviarEmail}
                          id="form2Example3cg"
                          onChange={e => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          Acepto los términos y condiciones{" "}
                          <a href="#!" className="text-body">
                            <u>Términos y Servicios</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center d-grid gap-2 col-6 mx-auto">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-3 btn-lg rounded-pill mb-3"
                        >
                          Registrar
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        ¿Ya estás registrado?{" "}
                        <NavLink to="/" className="fw-bold text-body">
                          <u>Ingresa Aquí!</u>
                        </NavLink>
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
