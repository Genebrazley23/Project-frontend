import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ModalWithForm/ModalWithForm.css";
import "./LoginModal.css";
const LoginModal = ({ isOpen, onLogin, onCloseModal, onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const signup = (
    <button className="modal__submit-signup" onClick={onSignUpClick}>
      or <span className="modal__signup-text">Signup</span>
    </button>
  );

  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Log In"
      handleSubmit={handleSubmit}
      otherButton={signup}
      handleCloseModal={onCloseModal}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          className="modal__input"
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
