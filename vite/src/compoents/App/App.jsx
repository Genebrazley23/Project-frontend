import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { NewsStoryContext } from "../../context/NewsStoryContext";
import "./App.css";
import Home from "../Home/Home";
import SaveNews from "../SaveNews/SaveNews";
import sampleNewsResponse from "/public/SampleNewsResponse.json";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../Modal/RegisterModal.jsx";
import { newsApiBaseUrl } from "../../utils/constants.js";
import Header from "../Header/Header.jsx";
import { CurrentUserContext } from "../../context/CurrentUserContext";
function App() {
  //const [newsResponse, setnewsResponse] = useState(sampleNewsResponse);
  const [newsResponse, setnewsResponse] = useState(null);
  const [activeModal, setActiveModal] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);

  const searchNews = (term, onComplete) => {
    console.log("neiwniansin", term);
    var from = new Date();
    from.setDate(from.getDate() - 7);
    const url =
      `${newsApiBaseUrl}?q=${term}&apiKey=647f4309b2b247bc8c741267672f86b6` +
      `&pageSize=100&to=${new Date().toLocaleDateString("en-US")}` +
      `&from=${from.toLocaleDateString("en-US")}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setnewsResponse(data);
      })
      .catch((error) => console.error(error))
      .finally(onComplete);
  };

  const showLoginForm = () => {
    setActiveModal("login");
  };
  const handleLogin = (email, password) => {
    signin(email, password)
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

  const handleRegister = (name, avatar, email, password) => {
    signup(name, avatar, email, password)
      .then((res) => {
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  const closeModal = () => {
    setActiveModal("");
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
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home handleSearch={searchNews} />} />
            <Route path="saveNews" element={<SaveNews />} />
          </Routes>
        </BrowserRouter>
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
      </NewsStoryContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
