import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <img src="/logo.png" alt="BVCEC" />

          <h2>BVCEC</h2>

          <p>
            Bonam Venkata Chalamayya Engineering College is committed
            to academic excellence, innovation and industry-oriented
            education, preparing students for successful careers.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#departments">Departments</a>
          <a href="#facilities">Facilities</a>
          <a href="#placements">Placements</a>
          <a href="#gallery">Gallery</a>

        </div>

        <div className="footer-links">

          <h3>Campus</h3>

          <a href="#">Admissions</a>
          <a href="#">Training & Placement</a>
          <a href="#">Library</a>
          <a href="#">Research</a>
          <a href="#">Alumni</a>
          <a href="#">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            Bonam Venkata Chalamayya Engineering College
          </p>

          <p>
            Odalarevu, Andhra Pradesh
          </p>

          <p>
            +91 9849642742
          </p>

          <p>
            bvcec@bvcgroup.in
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © 2026 Bonam Venkata Chalamayya Engineering College.
          All Rights Reserved.

        </p>

      </div>

      <button className="top-btn" onClick={scrollTop}>

        <FaArrowUp />

      </button>

    </footer>
  );
}

export default Footer;