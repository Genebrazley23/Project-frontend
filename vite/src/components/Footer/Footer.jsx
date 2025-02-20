import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__text">2024 Supersite, Powered by News API</h2>
        <nav className="footer__links">
          <ul className="footer__link">
            <li>
              <p className="footer__home-link">
                <Link to="/" className="no-decoration">
                  Home
                </Link>
              </p>
            </li>
            <li>
              <p className="footer__tripleten-link">
                <a
                  className="footer__tripleten-hyperlink"
                  href="https://www.tripleten.com"
                  onClick={() => console.log("TripleTen link clicked")}
                  target="_blank"
                >
                  TripleTen
                </a>
              </p>
            </li>
          </ul>
          <div className="footer__spacer"></div>
          <a
            href="https://github.com"
            onClick={() => console.log("Github link clicked")}
            target="_blank"
          >
            <img
              src={github}
              alt="Github Image"
              className="footer__github-image"
            />
          </a>
          <a
            href="https://www.facebook.com"
            onClick={() => console.log("Facebook link clicked")}
            target="_blank"
          >
            <img src={fb} alt="facebook Image" className="footer__fb-image" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
