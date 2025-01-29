import { Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { NewsStoryContext } from "../../context/NewsStoryContext";
import "./App.css";
import Home from "../Home/Home";
import SaveNews from "../SaveNews/SaveNews";
import sampleNewsResponse from "/public/SampleNewsResponse.json";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { newsApiBaseUrl } from "../../utils/constants.js";
import Header from "../Header/Header.jsx";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import dataLoader from "../../utils/data";
import Footer from "../Footer/Footer";
import RegistrationSuccessfullModal from "../RegistrationSuccessfulModal/RegistrationSuccessfulModal.jsx";

function App() {
  const [newsResponse, setnewsResponse] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasApiError, setHasApiError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [headerTheme, setHeaderTheme] = useState("header__light");

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const searchNews = (term, onComplete) => {
    setHasApiError(false);
    console.log("neiwniansin", term);
    dataLoader
      .searchNews(term)
      .then((data) => {
        console.log(data);
        setnewsResponse(data);
      })
      .catch((error) => {
        console.error(error);
        setHasApiError(true);
      })

      .finally(onComplete);
  };

  const showLoginForm = () => {
    setActiveModal("login");
  };

  const signIn = (email, password) => {
    /* return { token: "faketoken", user: { email: email } };*/
    return new Promise((resolve) => {
      console.log("signin", email, password);
      resolve({ token: "faketoken", user: { email: email, name: "homer" } });
    });
  };

  const handleLogin = (email, password) => {
    signIn(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setCurrentUser(res.user);
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  const showRegisterForm = () => {
    setActiveModal("register");
  };

  const signup = (email, password) => {
    /* return { token: "faketoken", user: { email: email } };*/
    return new Promise((resolve) => {
      console.log("signup", email, password);
      resolve({ successful: true });
    });
  };

  const handleRegister = (name, avatar, email, password) => {
    signup(name, avatar, email, password)
      .then((res) => {
        setActiveModal("register__successful");
      })
      .catch((error) => console.error(error));
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const onSigninClick = () => {
    showLoginForm();
  };

  const keydown = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <NewsStoryContext.Provider value={newsResponse}>
        <Header
          handleSignInBtnClick={showLoginForm}
          handleLogout={handleLogout}
          headerTheme={headerTheme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSearch={searchNews}
                hasApiError={hasApiError}
                setHeaderTheme={setHeaderTheme}
              />
            }
          />
          <Route
            path="saveNews"
            element={<SaveNews setHeaderTheme={setHeaderTheme} />}
          />
        </Routes>
        {activeModal === "login" && (
          <LoginModal
            isOpen={true}
            onCloseModal={closeModal}
            onLogin={handleLogin}
            onSignUpClick={showRegisterForm}
          />
        )}{" "}
        {activeModal === "register" && (
          <RegisterModal
            isOpen={true}
            onCloseModal={closeModal}
            onRegister={handleRegister}
            onSignClick={showLoginForm}
          />
        )}
        {activeModal === "register__successful" && (
          <RegistrationSuccessfullModal
            isOpen={true}
            onCloseModal={closeModal}
            onSigninClick={onSigninClick}
          />
        )}
      </NewsStoryContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
