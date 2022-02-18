import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { routes } from "../../lib/routes";
import { Button } from "../Button";
import { MenuDropdown, MasDropdown } from "./NavDropdown";
import {animateScroll as scroll} from 'react-scroll'

function Navbar() {

  const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="FCE Unimet Logo" />
          </Link>
          <ul className="nav-menu">
            {/* Los to se mantendran a "/" hasta que tengan su pagina correspondiente hecha */}
            {routes.map((route, i) => (
              <li className="nav-item" key={i}>
                <Link to={route.route} className="nav-links" target={route.target}>
                  {route.name}
                </Link>
              </li>
            ))}
            {/* responsive dropdown que va incorporando nav items a medida que se achica la pantalla */}
            <li className="nav-item nav-dropdown mas-dropdown">
              <MasDropdown />
            </li>
            {/* dropdown para pantallas moviles */}
            <li className="nav-item nav-dropdown menu-dropdown">
              <MenuDropdown />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
