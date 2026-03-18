import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          {"< >"} Abishek.<span>S</span>
        </div>

        {/* Social Icons */}
        <div className="footer-icons">

          <a href="https://github.com/ABISHEK-FED" target="_blank" rel="noreferrer">
            <FaGithub className="icon github"/>
          </a>

          <a href= "https://www.linkedin.com/in/abishek-sachithanandham-5bb711390"target="_blank" rel="noreferrer">
            <FaLinkedinIn className="icon linkedin"/>
          </a>

          <a href="https://instagram.com/sg_abishek_official" target="_blank" rel="noreferrer">
            <FaInstagram className="icon instagram"/>
          </a>

        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © 2026 Abishek. All rights reserved.
        </div>

      </div>

    </footer>
  );
}