import "./VisionMission.css";
import {
  FaEye,
  FaBullseye,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

function VisionMission() {
  return (
    <section className="vision-mission" id="vision">

      <div className="section-header">
        <span>OUR PURPOSE</span>
        <h2>Vision & Mission</h2>
      </div>

      <div className="vision-container">

        <div className="vision-row">

          <div className="vision-image">
            <img src="/college/college.jpg" alt="Vision" />
          </div>

          <div className="vision-card">

            <div className="vision-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be recognized as a premier institution of engineering
              education by nurturing innovation, research, leadership,
              entrepreneurship and lifelong learning.
            </p>

            <ul>
              <li>Excellence in Engineering Education</li>
              <li>Innovation & Research</li>
              <li>Global Competitiveness</li>
              <li>Ethical Leadership</li>
            </ul>

          </div>

        </div>

        <div className="mission-row">

          <div className="mission-card">

            <div className="vision-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <div className="mission-list">

              <div className="mission-item">
                <FaLightbulb />
                <p>
                  Deliver quality technical education through practical learning.
                </p>
              </div>

              <div className="mission-item">
                <FaUsers />
                <p>
                  Encourage innovation, teamwork and leadership.
                </p>
              </div>

              <div className="mission-item">
                <FaLightbulb />
                <p>
                  Strengthen collaboration with industries.
                </p>
              </div>

              <div className="mission-item">
                <FaUsers />
                <p>
                  Promote ethical values and lifelong learning.
                </p>
              </div>

            </div>

          </div>

          <div className="vision-image">
            <img src="/college/college3.jpg" alt="Mission" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default VisionMission;