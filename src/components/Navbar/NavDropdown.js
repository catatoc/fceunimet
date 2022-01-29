import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";
import { routes } from "../../lib/routes";

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
          <Link to="/store" className="nav-links">
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
        {routes.map((route, i) => (
          <li key={i}>
            <Link to={route.route} className="nav-links">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
