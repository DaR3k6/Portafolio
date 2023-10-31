import React from "react";
import img from "../assets/img/profile.jpg";
const Modal = (isOpen, closeModal) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal">
        <i className="bx bx-plus" onClick={closeModal}></i>
        <div className="container">
          <img src={img} />
        </div>
      </div>
    </>
  );
};

export default Modal;
