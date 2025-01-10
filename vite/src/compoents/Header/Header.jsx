import "./Header.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

function Header({ handleSignInBtnClick, handleSignUpBtnClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__title">NewsExplorer</div>
      <div className="header__spacer"></div>
      <div className="header__page-title">Home</div>
      {currentUser && (
        <Link to="/profile">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="avatar"
              />
            ) : (
              <div className="circle"> {currentUser.name.substring(0, 1)}</div>
            )}
          </div>
        </Link>
      )}

      {!currentUser && <button className="header__signin">Sign in</button>}
    </header>
  );
}
export default Header;
