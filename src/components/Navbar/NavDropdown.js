import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";

// Los estilos de clases nav-links estan definidos en Navbar.css:
export const MasDropdown1024 = () => {
  return (
    <>
      <button className="dropbtn">
        <p>
          Más <span>↓</span>
        </p>
      </button>
      <ul className="dropdown-content">
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
