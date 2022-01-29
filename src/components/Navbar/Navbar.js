import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button";
import { MenuDropdown, MasDropdown } from "./NavDropdown";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="FCE Unimet Logo" />
          </Link>
          <ul className="nav-menu">
            {/* Los to se mantendran a "/" hasta que tengan su pagina correspondiente hecha */}
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Escuelas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Agrupaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Universidad
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Calendario
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Ayuda
              </Link>
            </li>
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
