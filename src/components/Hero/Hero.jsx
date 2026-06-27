import "./Hero.css";
import { FaArrowRight, FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-left">

          <span className="badge">
            ★ NAAC Accredited | AICTE Approved
          </span>

          <h1>
            BONAM VENKATA CHALAMAYYA
            <br />
            <span>ENGINEERING COLLEGE</span>
          </h1>

          <p>
            Empowering Future Engineers through Innovation,
            Excellence, Leadership and Industry Ready Education.
          </p>

          <div className="hero-buttons">

            <a href="#about" className="primary-btn">
              Explore Campus
              <FaArrowRight />
            </a>

            <a href="#gallery" className="secondary-btn">
              <FaPlay />
              Watch Campus
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>25+</h2>
              <span>Years</span>
            </div>

            <div>
              <h2>8000+</h2>
              <span>Students</span>
            </div>

            <div>
              <h2>500+</h2>
              <span>Faculty</span>
            </div>

            <div>
              <h2>95%</h2>
              <span>Placements</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="/hero.jpg"
            alt="College"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;