import Modal from "../Modal/Modal.jsx";
import "./RegistrationSuccessfulModal.css";
const RegistrationSuccessfullModal = ({
  isOpen,
  onCloseModal,
  onSigninClick,
}) => {
  const signinButton = (
    <input
      type="button"
      className="modal__signin-button"
      onClick={onSigninClick}
      value="Sign in"
    />
  );

  return (
    <Modal
      title="Registration successfully completed!"
      buttonText="Sign In"
      handleCloseModal={onCloseModal}
    >
      {signinButton}
    </Modal>
  );
};

export default RegistrationSuccessfullModal;
