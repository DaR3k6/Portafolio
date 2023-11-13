import React, { useState } from "react";
import Swal from "sweetalert2";
import HelperForm from "../../../helpers/HelperForm";
import { Global } from "../../../helpers/Global";

const ModalEstudioEditar = ({ tipo, descripcion, fecha, notas, id }) => {
  const { form, cambiar } = HelperForm({});
  const [, setGuardado] = useState("");

  const mostrarCamposVaciosAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Por favor complete todos los campos obligatorios.",
    });
  };

  const mostrarErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  const validarFormulario = () => {
    if (!form.nombre || !form.detalle || !form.link) {
      console.error("Datos de Estudio no disponibles.");
      mostrarCamposVaciosAlert();
      return false;
    }
    return true;
  };

  const guardarProyecto = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    let nuevoProyecto = form;
    console.log(nuevoProyecto);

    try {
      const request = await fetch(Global.url + `/estudios/actualizar/${id}`, {
        method: "PUT",
        body: JSON.stringify(nuevoProyecto),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log(request);
      const data = await request.json();
      if (data.status === true) {
        setGuardado("Guardado");
        Swal.fire({
          icon: "success",
          title: "Estudio Editado exitosamente",
          text: "¡Tu Estudio ha sido Editado!",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        setGuardado("Error");
        mostrarErrorAlert(data.mensaje);
      }
    } catch (error) {
      mostrarErrorAlert(
        "Algo salió mal. Por faavor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <div
      className="modal fade"
      id={`modalEditarEstudio${id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Editar Estudio</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={guardarProyecto}>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text">📚</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Proyecto"
                  name="nombre"
                  onChange={cambiar}
                  defaultValue={tipo}
                />
              </div>
              <div className="input-group mb-3">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    name="detalle"
                    onChange={cambiar}
                    defaultValue={fecha}
                  ></textarea>
                  <label>Detalles del Proyecto</label>
                </div>
              </div>
              <div className="input-group mb-3">
                <label className="form-label">Ingresa tu URL</label>
                <div className="input-group">
                  <span className="input-group-text">https://</span>
                  <input
                    type="text"
                    className="form-control"
                    name="link"
                    onChange={cambiar}
                    defaultValue={notas}
                  />
                </div>
                <div className="form-text">Sitio de tu proyecto.</div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEstudioEditar;
