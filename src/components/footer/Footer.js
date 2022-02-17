import React from "react";
import { footRoutes } from "../../lib/routes";
import "./Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import InstagramLogo from "../svg/instagram.svg";
import YoutubeLogo from "../svg/youtube.svg";
import TwitterLogo from "../svg/twitter.svg";
import FacebookLogo from "../svg/facebook.svg";

function Footer() {
  return (
    <footer>
      {/* Para incluir el hr necesitamo otro contenedor para el logo */}
      <div id="footer-logo-small-screens-wrapper">
        <Link to="/" className="footer-logo">
          <img src="/images/logo.png" alt="FCE Unimet Logo" />
        </Link>
      </div>
      <ul className="footer-links-container">
        {footRoutes.map((route, i) => (
          <li className="footer-items" key={i}>
            <Link to={route.route} className="footer-links">
              {route.name}
            </Link>
          </li>
        ))}
        <li className="footer-items">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png" alt="FCE Unimet Logo" />
          </Link>
        </li>
      </ul>
      <ul className="footer-social-container">
        <li>
          <Link to="/" className="footer-social">
            <img src={FacebookLogo} alt="Perfil de Facebook" />
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-social">
            <img src={TwitterLogo} alt="Perfil de Twitter" />
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-social">
            <img src={InstagramLogo} alt="Perfil de Instagram" />
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-social">
            <img src={YoutubeLogo} alt="Canal de Youtube" />
          </Link>
        </li>
      </ul>
      <p className="footer-copyright">
        &copy; Copyright 2022 HTML.am
        <br /> Desarrollado por Nosotros
      </p>
    </footer>
  );
}

export default Footer;
