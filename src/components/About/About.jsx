import "./About.css";
import {
  FaUniversity,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span>ABOUT BVCEC</span>
        <h2>Building Future Engineers with Excellence</h2>
      </div>

      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-image">
          <img
            src="/college/college2.jpg"
            alt="BVCEC Campus"
          />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <h3>Bonam Venkata Chalamayya Engineering College</h3>

          <p>
            Bonam Venkata Chalamayya Engineering College (BVCEC) is committed
            to providing quality technical education by combining academic
            excellence, innovation, research, and industry-oriented learning.
          </p>

          <p>
            The institution focuses on producing highly skilled engineers
            equipped with technical knowledge, leadership qualities,
            ethical values, and problem-solving abilities to meet the
            challenges of the modern world.
          </p>

          <div className="vision-mission">
            <div className="vision">
              <h4>Vision</h4>

              <p>
                To become a center of excellence in engineering education,
                research, innovation, and entrepreneurship.
              </p>
            </div>

            <div className="mission">
              <h4>Mission</h4>

              <p>
                Deliver quality education through modern teaching,
                practical learning, research, and industry collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <FaUniversity />

          <h3>Quality Education</h3>

          <p>
            Academic excellence through modern teaching methodologies.
          </p>
        </div>

        <div className="about-card">
          <FaGraduationCap />

          <h3>Experienced Faculty</h3>

          <p>
            Highly qualified professors dedicated to student success.
          </p>
        </div>

        <div className="about-card">
          <FaLaptopCode />

          <h3>Industry Ready</h3>

          <p>
            Practical learning with real-world industry exposure.
          </p>
        </div>

        <div className="about-card">
          <FaAward />

          <h3>Career Growth</h3>

          <p>
            Strong placement support and professional development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;