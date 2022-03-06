import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";
import { navRoutes } from "../../lib/routes";
import { animateScroll as scroll } from "react-scroll";

// Los estilos de clases nav-links estan definidos en Navbar.css:
export const MasDropdown = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <button className="dropbtn mas-dropdown">
        <p>
          Más <span>↓</span>
        </p>
      </button>
      <ul className="dropdown-content">
        <li>
          <Link
            to="/"
            className="nav-links"
            target="_blank"
            onClick={toggleHome}
          >
            Calendario
          </Link>
        </li>
        <li>
          <Link
            to="/store"
            className="nav-links"
            target="_blank"
            onClick={toggleHome}
          >
            Tienda
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="dropdown-links"
            target="_blank"
            onClick={toggleHome}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="dropdown-links"
            target="_blank"
            onClick={toggleHome}
          >
            Ayuda
          </Link>
        </li>
      </ul>
    </>
  );
};

export const MenuDropdown = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <button className="dropbtn menu-dropdown">
        <p>
          Menú <span>↓</span>
        </p>
      </button>
      <ul className="dropdown-content">
        {navRoutes.map((route, i) => (
          <li key={i}>
            <Link
              to={route.route}
              className="nav-links"
              target={route.target}
              onClick={toggleHome}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
