import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>

      <div className="logo">

        <img src="/logo.png" alt="BVCEC Logo" />

        <div className="logo-text">
          <h2>BVCEC</h2>
          <span>College Portfolio</span>
        </div>

      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#departments">Departments</a></li>

        <li><a href="#facilities">Facilities</a></li>

        <li><a href="#placements">Placements</a></li>

        <li><a href="#gallery">Gallery</a></li>

        <li><a href="#events">Events</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <button className="admission-btn">

        Admissions

      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

    </nav>
  );
}

export default Navbar;