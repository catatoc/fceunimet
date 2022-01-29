import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";

// Los estilos de clases nav-links estan definidos en Navbar.css:
export const MasDropdown = () => {
  return (
    <>
      <button className="dropbtn mas-dropdown">
        <p>
          Más <span>↓</span>
        </p>
      </button>
      <ul className="dropdown-content">
        <li>
          <Link to="/" className="nav-links">
            Calendario
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Tienda
          </Link>
        </li>
        <li>
          <Link to="/" className="dropdown-links">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/" className="dropdown-links">
            Ayuda
          </Link>
        </li>
      </ul>
    </>
  );
};

export const MenuDropdown = () => {
  return (
    <>
      <button className="dropbtn menu-dropdown">
        <p>
          Menú <span>↓</span>
        </p>
      </button>
      <ul className="dropdown-content">
        <li>
          <Link to="/" className="nav-links">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Escuelas
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Agrupaciones
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Universidad
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Calendario
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Tienda
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links">
            Ayuda
          </Link>
        </li>
      </ul>
    </>
  );
};
