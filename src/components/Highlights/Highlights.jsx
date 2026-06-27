import "./Highlights.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBriefcase,
  FaBookOpen,
  FaTrophy
} from "react-icons/fa";

function Highlights() {
  return (
    <section className="highlights">

      <div className="section-header">

        <span>COLLEGE HIGHLIGHTS</span>

        <h2>Why Students Choose BVCEC</h2>

      </div>

      <div className="stats-container">

        <div className="stat-card">

          <FaUserGraduate />

          <h3>8000+</h3>

          <p>Students</p>

        </div>

        <div className="stat-card">

          <FaChalkboardTeacher />

          <h3>500+</h3>

          <p>Faculty Members</p>

        </div>

        <div className="stat-card">

          <FaBuilding />

          <h3>25+</h3>

          <p>Years of Excellence</p>

        </div>

        <div className="stat-card">

          <FaBriefcase />

          <h3>95%</h3>

          <p>Placement Rate</p>

        </div>

        <div className="stat-card">

          <FaBookOpen />

          <h3>20+</h3>

          <p>Academic Programs</p>

        </div>

        <div className="stat-card">

          <FaTrophy />

          <h3>150+</h3>

          <p>National Awards</p>

        </div>

      </div>

    </section>
  );
}

export default Highlights;