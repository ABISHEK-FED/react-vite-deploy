import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIXED OFFSET (NO BUG)
  const offsetValue = 60;

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        Abishek<span>.FED</span>
      </div>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        
        {["home","about","skills","projects","contact"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={offsetValue}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}

      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-icons">

        <a href="https://github.com/ABISHEK-FED" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>

        <a href="https://www.linkedin.com/in/abishek-sachithanandham-5bb711390" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>

        <Link to="contact" smooth duration={500} offset={offsetValue}>
          <button className="talk-btn">Let's Talk</button>
        </Link>

      </div>

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}