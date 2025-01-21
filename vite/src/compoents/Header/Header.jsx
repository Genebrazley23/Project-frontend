import "./Header.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext, useState } from "react";
import closeButton from "../../assets/Closeicon.png";
import { HashLink } from "react-router-hash-link";

function Header({ handleSignInBtnClick, handleSignUpBtnClick }) {
  const currentUser = useContext(CurrentUserContext);

  const [showMenuBtn, setShowMenuBtn] = useState(false);

  function handleClose() {
    console.log("handleClose called");
    console.log("showMenuBtn:", showMenuBtn);
    setShowMenuBtn(false);
    console.log("showMenuBtn after setting to false:", showMenuBtn);
  }

  function handleMenuBtnClick() {
    setShowMenuBtn(true);
  }

  function handleSignClick() {
    setShowMenuBtn(false);
    handleSignInBtnClick();
  }

  return (
    <header className="header">
      {showMenuBtn && (
        <div className="header__menu-overlay">
          {" "}
          <div className="menu__container">
            <button
              onClick={() => handleClose()}
              type="button"
              className="menu__close"
            >
              <img src={closeButton} alt="close"></img>
            </button>
            <div className="header__top-menu ">NewsExplorer</div>
            <div className="header__menu-title ">Home</div>
            <button className="header__menu-signin" onClick={handleSignClick}>
              Sign in
            </button>
          </div>
        </div>
      )}
      <div className="header__title">NewsExplorer</div>
      <div className="header__spacer"></div>
      <div className="header__page-title mobile__hidden">Home</div>
      {currentUser && (
        <HashLink to="/saveNews" className="mobile__hidden">
          <div className="header__user-container">
            <p className="header__username">{currentUser?.name}</p>
          </div>
        </HashLink>
      )}

      {!currentUser && (
        <>
          <button
            className="header__signin mobile__hidden"
            onClick={handleSignInBtnClick}
          >
            Sign in
          </button>
          <button
            className="header__menu desktop__hidden"
            onClick={handleMenuBtnClick}
          >
            =
          </button>
        </>
      )}
    </header>
  );
}
export default Header;
