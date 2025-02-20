import "./Modal.css";
import { useState } from "react";

function Modal({ handleCloseModal, title, customClass, children }) {
  function handleClose(e) {
    e.preventDefault();
    handleCloseModal();
  }

  return (
    <div className="modal" onClick={handleClose}>
      <div className={"modal__container " + (customClass || "")}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <h2 className="modal__title">{title}</h2>
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
