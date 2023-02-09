import React, { useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container container">
          <div className="brand">
            <NavLink to="/" className="nav-logo">
              Arnab
            </NavLink>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
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
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
