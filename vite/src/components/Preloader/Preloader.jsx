import React from "react";
import "./Preloader.css";

const Preloader = ({ text = "Loading..." }) => {
  return (
    <div className="preloader-container">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news</p>
    </div>
  );
};

export default Preloader;
