import "./ModalWithForm.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

function ModalWithForm({
  handleSubmit,
  handleCloseModal,
  title,
  buttonText,
  otherButton,
  customClass,
  children,
}) {
  const [formData, setFormData] = useState({});

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      title={title}
      customClass={customClass}
    >
      <form onSubmit={handleSubmit} className="modal__form">
        {children}
        <div className="modal__submit-container">
          <input type="submit" className="modal__submit" value={buttonText} />
          {otherButton}
        </div>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
