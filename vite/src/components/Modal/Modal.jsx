import "./Modal.css";
import { useState } from "react";

function Modal({ handleCloseModal, title, customClass, children }) {
  function handleClose(e) {
    e.preventDefault();
    handleCloseModal();
  }

  return (
    <div className="modal__background" onClick={handleClose}>
      <div className={"modal " + (customClass || "")}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <h1 className="modal__title ">{title}</h1>
          <button
            onClick={handleClose}
            type="button"
            className="modal__close"
          ></button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
