import React from "react";
import "./Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { footRoutes } from "../../lib/routes";

function Footer() {
  return (
    <footer>
      <ul className="footer-links-container">
        {footRoutes.map((route, i) => (
          <li className="footer-items">
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
      <hr />
    </footer>
  );
}

export default Footer;
