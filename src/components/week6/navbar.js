import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav classname="menu">
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <img src={logo} />
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/discover"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Discover
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/support"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Support
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/download"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Download
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              {click ? <CgClose /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
}

export default NavBar;
