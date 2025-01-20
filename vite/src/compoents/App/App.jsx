import { HashRouter, Routes, Route } from "react-router-dom";
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
import dataLoader from "../../utils/data";
import Footer from "../Footer/Footer"; // Import the Footer component

function App() {
  // ... rest of the code ...

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <NewsStoryContext.Provider value={newsResponse}>
        <Header handleSignInBtnClick={showLoginForm} />
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home handleSearch={searchNews} hasApiError={hasApiError} />
              }
            />
            <Route path="saveNews" element={<SaveNews />} />
          </Routes>
        </HashRouter>
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
        <div>
          <Footer /> // Render the Footer component
        </div>
      </NewsStoryContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
