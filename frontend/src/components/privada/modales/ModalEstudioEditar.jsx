import React, { useState } from "react";
import Swal from "sweetalert2";
import HelperForm from "../../../helpers/HelperForm";
import { Global } from "../../../helpers/Global";

const ModalEstudioEditar = ({ tipo, detalle, fecha, notas, id, token }) => {
  const { form, cambiar } = HelperForm({});
  const [, setGuardado] = useState("");
<<<<<<< HEAD

  if (notas == 1) {
  }
=======
>>>>>>> f4cba80ea7115efaf4609464d43d63af9ef826c6
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
    const { tipo, detalle, fecha, notas } = form;

    if (!detalle && !fecha && !notas) {
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

    let nuevoEstudio = form;

    try {
      const response = await fetch(Global.url + `/estudios/actualizar/${id}`, {
        method: "PUT",
        body: JSON.stringify(nuevoEstudio),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = await response.json();

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
        "Algo salió mal. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <div
      className="modal fade"
      id={`editarEstudio${id}`}
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
              <div className="mb-3">
                <label> Tipo : </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  name="tipo"
                  onChange={cambiar}
                  defaultValue={tipo}
                />
              </div>
<<<<<<< HEAD
              <div className="input-group mb-3">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    name="detalle"
                    onChange={cambiar}
                    defaultValue={descripcion}
                  ></textarea>
                  <label>Detalles del Estudio</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="date"
                  name="fecha"
                  id=""
                  onChange={cambiar}
                  defaultValue={fecha}
                />
                <label htmlFor="">Fecha de estudio</label>
              </div>

              <div className="input-group mb-3">
                <label className="form-label">Ingresa tu URL</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="link"
=======
              <div className="mb-3">
                <label> Detalle : </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  onChange={cambiar}
                  defaultValue={detalle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha fin del estudio:</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Leave a comment here"
                  name="fecha"
                  onChange={cambiar}
                  defaultValue={fecha}
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Notas de estudio:</label>
                <div className="input-group">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                    name="notas"
>>>>>>> f4cba80ea7115efaf4609464d43d63af9ef826c6
                    onChange={cambiar}
                    defaultValue={notas}
                  >
                    <option value="0">Selecciona</option>
                    <option value="1">Aprobado</option>
                    <option value="2">No Aprovado</option>
                    <option value="3">En Proceso</option>
                  </select>
                </div>
                <div className="form-text">Sitio de tu estudio.</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEstudioEditar;
