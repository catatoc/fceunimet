import React from "react";
import { footRoutes } from "../../lib/routes";
import "./Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import InstagramLogo from "../svg/instagram.svg";
import YoutubeLogo from "../svg/youtube.svg";
import TwitterLogo from "../svg/twitter.svg";
import FacebookLogo from "../svg/facebook.svg";
import WhatsappLogo from "../svg/whatsapp.svg";
import {animateScroll as scroll} from 'react-scroll'


function Footer() {

    // Funcion para subir al home
    const toggleHome = () => {
      scroll.scrollToTop();
  }

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
            <Link to={route.route} className="footer-links" target={route.target} onClick={route.scrollTop}>
              {route.name}
            </Link>
          </li>
        ))}
        <li className="footer-items">
          <Link to="/" className="footer-logo" onClick={toggleHome}>
            <img src="/images/logo.png" alt="FCE Unimet Logo" />
          </Link>
        </li>
      </ul>
      <ul className="footer-social-container">
        <li>
          <Link to={{ pathname: "https://wa.me/message/IXSR62NGBTYKL1" }} target="_blank" aria-label="WhatsApp" className="footer-social">
            <img src={WhatsappLogo} alt="Perfil de WhatsApp" />
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "https://twitter.com/FCEUNIMET" }} target="_blank" aria-label="Twitter" className="footer-social">
            <img src={TwitterLogo} alt="Perfil de Twitter" />
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "https://www.instagram.com/fceunimet/?hl=es" }} target="_blank" aria-label="Instagram" className="footer-social">
            <img src={InstagramLogo} alt="Perfil de Instagram" />
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "https://www.youtube.com/channel/UCL5FAy6D9T0-S3h1XitbK6g/playlists" }} target="_blank" aria-label="YouTube" className="footer-social">
            <img src={YoutubeLogo} alt="Canal de Youtube" />
          </Link>
        </li>
      </ul>
      <p className="footer-copyright">
        &copy; Copyright 2022 HTML.am
        <br /> Desarrollado por CEIS 21-22
      </p>
    </footer>
  );
}

export default Footer;
