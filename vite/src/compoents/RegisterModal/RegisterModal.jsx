import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onRegister, onCloseModal, onSignClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const checkEmailAvailability = (email) => {
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkEmailAvailability(email)) {
      alert("This email is not available");
      return;
    }
    onRegister(name, email, password);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const signIn = (
    <button className="modal__submit-signup" onClick={onSignClick}>
      or <span className="modal__signup-text">Sign In</span>
    </button>
  );
  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      handleSubmit={handleSubmit}
      handleCloseModal={onCloseModal}
      otherButton={signIn}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="modal__input"
          placeholder=" Enter  email"
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="modal__input"
          placeholder=" Enter password"
          required
        />
      </label>

      <label className="modal__label">
        Username
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="modal__input"
          placeholder=" Enter username"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
