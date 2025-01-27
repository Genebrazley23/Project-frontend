import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">©2024 Supersite, Powered by News API</p>
        <div className="footer__links">
          <div className="footer__links__container">
            <p className=" home__link">Home</p>
            <p className="tripleten__link">
              <a
                className="tripleten__hyperlink"
                href="https://www.tripleten.com"
                onClick={() => console.log("TripleTen link clicked")}
              >
                TripleTen
              </a>
            </p>
          </div>
          <div className="spacer"></div>
          <a
            href="https://github.com"
            onClick={() => console.log("Github link clicked")}
          >
            <img src={github} alt="Github Image" className="github__image" />
          </a>
          <a
            href="https://www.facebook.com"
            onClick={() => console.log("Facebook link clicked")}
          >
            <img src={fb} alt="facebook Image" className="fb__image" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
