import "./Header.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import closeButton from "../../assets/closeicon.svg";
import backbutton from "../../assets/backbutton.svg";

function Header({ handleSignInBtnClick, handleLogout, headerTheme }) {
  const currentUser = useContext(CurrentUserContext);
  const [showMenuBtn, setShowMenuBtn] = useState(false);
  const location = useLocation();

  const isHomeUnderlined = location.pathname === "/";
  const isSavedNewsUnderlined = location.pathname === "/saveNews";

  function handleClose() {
    setShowMenuBtn(false);
  }

  function handleMenuBtnClick() {
    setShowMenuBtn(true);
  }

  function handleSignClick() {
    setShowMenuBtn(false);
    handleSignInBtnClick();
  }

  return (
    <header className={`header ${headerTheme}`}>
      {showMenuBtn && (
        <div className="header__menu-overlay">
          <div className="menu__container">
            <button onClick={handleClose} type="button" className="menu__close">
              <img src={closeButton} alt="close"></img>
            </button>
            <div className="header__top-menu">NewsExplorer</div>
            <div
              className={`header__page-title ${
                isHomeUnderlined ? "underlined" : ""
              }`}
            >
              <Link to="/" className="no-decoration">
                Home
              </Link>
            </div>
            {currentUser && (
              <div
                className={`header__page-title ${
                  isSavedNewsUnderlined ? "underlined" : ""
                }`}
              >
                <Link to="/saveNews" className="no-decoration">
                  Saved Articles
                </Link>
              </div>
            )}
            {currentUser ? (
              <button onClick={handleLogout} className=" Header__logout-button">
                <div className="header__user-container">
                  <p className="header__username">{currentUser?.name}</p>
                  <img
                    src={backbutton}
                    alt="back"
                    className="header__back-button"
                  />
                </div>
              </button>
            ) : (
              <button className="header__menu-signin" onClick={handleSignClick}>
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
      <div className="header__title">NewsExplorer</div>
      <div className="header__spacer"></div>
      <nav className="header__links">
        <ul className="header__link-list">
          <li
            className={`header__page-title header__mobile-hidden ${
              isHomeUnderlined ? "home-underlined" : ""
            }`}
          >
            <Link to="/" className="header__mobile-hidden no-decoration">
              Home
            </Link>
          </li>

          {currentUser && (
            <li
              className={`header__page-title header__mobile-hidden ${
                isSavedNewsUnderlined ? "saved-articles-underlined" : ""
              }`}
            >
              <Link
                to="/saveNews"
                className="header__mobile-hidden no-decoration"
              >
                Saved Articles
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {currentUser ? (
        <div>
          <button
            onClick={handleLogout}
            className="header__mobile-hidden Header__logout-button"
          >
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name}</p>
              <img
                src={backbutton}
                alt="back"
                className="header__back-button"
              />
            </div>
          </button>
          <button
            className="header__menu header__desktop-hidden"
            onClick={handleMenuBtnClick}
          >
            =
          </button>
        </div>
      ) : (
        <div>
          <button
            className="header__signin header__mobile-hidden"
            onClick={handleSignInBtnClick}
          >
            Sign in
          </button>
          <button
            className="header__menu header__desktop-hidden"
            onClick={handleMenuBtnClick}
          >
            =
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
