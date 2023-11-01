import React from "react";

const Proyecto = () => {
  return (
    <>
      <div
        class="modal fade"
        id="proyecto1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Agregar Proyecto <i class="bi bi-folder-plus"></i>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  📚
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre Proyecto"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextareaDisabled"
                  ></textarea>
                  <label for="floatingTextareaDisabled">
                    Detalles del Proyecto
                  </label>
                </div>
              </div>
              <div class="input-group mb-3">
                <label for="basic-url" class="form-label">
                  Ingresa tu URL
                </label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">
                    https://
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div class="form-text" id="basic-addon4">
                  Sitio de tu proyecto.
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyecto;
