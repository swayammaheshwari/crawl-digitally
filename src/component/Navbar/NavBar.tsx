import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import icon from "../../assets/icon.png";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <a href="#" className="navbar-logo">
              <img src={icon} alt="icon" className="navbar-icon" />
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links " + (isActive ? " activated " : "")  
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links " + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    "nav-links " + (isActive ? " activated " : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "nav-links " + (isActive ? " activated " : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-links " + (isActive ? " activated " : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
