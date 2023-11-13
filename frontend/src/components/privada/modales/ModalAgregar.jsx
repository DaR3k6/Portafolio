import React, { useState } from "react";
import Swal from "sweetalert2";
import HelperForm from "../../../helpers/HelperForm";
import { Global } from "../../../helpers/Global";

const ModalAgregar = ({ token }) => {
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

  //VALIDACION DE LOS CAMPOS VACIOS
  const validarFormulario = () => {
    if (!form.nombre || !form.detalle || !form.link) {
      mostrarCamposVaciosAlert();
      return false;
    }
    return true;
  };

  //GUARDA LA INSERCION DE LOS PROYECTOS
  const guardarProyecto = async e => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    let nuevoProyecto = form;

    try {
      const request = await fetch(Global.url + "/proyecto/agregar", {
        method: "POST",
        body: JSON.stringify(nuevoProyecto),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await request.json();
      if (data.status === true) {
        //MENSAJE EXITOSO
        console.log(data);
        setGuardado("Guardado");
        Swal.fire({
          icon: "success",
          title: "Proyecto Agregado exitosamente",
          text: "¡Tu Proyecto a sido Agregado!",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
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
      <div
        className="modal fade"
        id="proyecto1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form onSubmit={guardarProyecto}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Agregar Proyecto <i className="bi bi-folder-plus"></i>
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
                    name="nombre"
                    onChange={cambiar}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextareaDisabled"
                      name="detalle"
                      onChange={cambiar}
                    ></textarea>
                    <label for="floatingTextareaDisabled">
                      Detalles del Proyecto
                    </label>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label for="basic-url" className="form-label">
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
                      name="link"
                      onChange={cambiar}
                    />
                  </div>
                  <div className="form-text" id="basic-addon4">
                    Sitio de tu proyecto.
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAgregar;
