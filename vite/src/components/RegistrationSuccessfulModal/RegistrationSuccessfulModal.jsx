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
      customClass="modal__registration-successfull"
    >
      {signinButton}
    </Modal>
  );
};

export default RegistrationSuccessfullModal;
