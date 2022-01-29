import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button";
import { MasDropdown1024 } from "./NavDropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
            <li className="nav-item nav-view-1024">
              <Link to="/" className="nav-links">
                Calendario
              </Link>
            </li>
            <li className="nav-item nav-view-1024">
              <Link to="/store" className="nav-links">
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
            <li className="nav-item nav-dropdown">
              <MasDropdown1024 />
            </li>
            {/* <li>
              {button && <Button buttonStyle="btn--outline">Contacto</Button>}
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
