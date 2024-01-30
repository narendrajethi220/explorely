import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
// Navbar updating
const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  // Button
  const [button, setButton] = useState(true);

  // Toggling and resizing the button

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
            explorely{" "}
            <FontAwesomeIcon className="navbar-img" icon={faEarthAmerica} />
          </Link>
          <div className="menu-icon" onClick={() => setClick(!click)}>
            <FontAwesomeIcon icon={click ? faXmark : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
