import "./Placements.css";
import {
  FaBriefcase,
  FaMoneyBillWave,
  FaChartLine,
  FaBuilding
} from "react-icons/fa";

function Placements() {
  return (
    <section className="placements" id="placements">

      <div className="section-header">

        <span>PLACEMENTS</span>

        <h2>Building Successful Careers</h2>

      </div>

      <div className="placement-wrapper">

        <div className="placement-left">

          <h3>
            Strong Placement Support with Top Recruiters
          </h3>

          <p>
            BVCEC provides excellent placement opportunities through
            continuous training, aptitude sessions, mock interviews,
            internships, industrial visits and campus recruitment
            programs conducted by leading multinational companies.
          </p>

          <div className="placement-points">

            <div>✔ Industry-Oriented Training</div>

            <div>✔ Soft Skills Development</div>

            <div>✔ Coding & Aptitude Training</div>

            <div>✔ Internship Opportunities</div>

            <div>✔ Campus Recruitment Drives</div>

            <div>✔ Career Guidance Programs</div>

          </div>

        </div>

        <div className="placement-right">

          <div className="placement-card">

            <FaMoneyBillWave />

            <h2>12 LPA</h2>

            <p>Highest Package</p>

          </div>

          <div className="placement-card">

            <FaChartLine />

            <h2>95%</h2>

            <p>Placement Rate</p>

          </div>

          <div className="placement-card">

            <FaBuilding />

            <h2>150+</h2>

            <p>Recruiters</p>

          </div>

          <div className="placement-card">

            <FaBriefcase />

            <h2>5000+</h2>

            <p>Students Placed</p>

          </div>

        </div>

      </div>

      <div className="company-section">

        <h3>Top Recruiters</h3>

        <div className="company-grid">

          <div>Infosys</div>

          <div>TCS</div>

          <div>Accenture</div>

          <div>Wipro</div>

          <div>Cognizant</div>

          <div>Hexaware</div>

          <div>DXC Technologies</div>

          <div>Mphasis</div>

          <div>HCL</div>

          <div>PeopleTech</div>

        </div>

      </div>

    </section>
  );
}

export default Placements;