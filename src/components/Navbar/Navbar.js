import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="FCE Unimet Logo" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Los to se mantendran a "/" hasta que tengan su pagina correspondiente hecha */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Escuelas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Agrupaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Universidad
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Calendario
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Ayuda
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Contacto</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
