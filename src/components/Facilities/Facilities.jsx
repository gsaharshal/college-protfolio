import "./Facilities.css";
import {
  FaBookOpen,
  FaLaptopCode,
  FaBus,
  FaWifi,
  FaHospital,
  FaRunning,
  FaUtensils,
  FaBuilding
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaBookOpen />,
    title: "Central Library",
    desc: "A modern library with thousands of books, journals, and digital resources."
  },
  {
    icon: <FaLaptopCode />,
    title: "Advanced Laboratories",
    desc: "State-of-the-art computer, electronics, and engineering laboratories."
  },
  {
    icon: <FaBuilding />,
    title: "Smart Classrooms",
    desc: "Digital classrooms equipped with smart boards and projectors."
  },
  {
    icon: <FaWifi />,
    title: "Campus Wi-Fi",
    desc: "High-speed internet connectivity across the entire campus."
  },
  {
    icon: <FaBus />,
    title: "Transportation",
    desc: "Safe and convenient transport facilities covering nearby towns."
  },
  {
    icon: <FaHospital />,
    title: "Medical Center",
    desc: "On-campus healthcare support with emergency medical facilities."
  },
  {
    icon: <FaRunning />,
    title: "Sports Complex",
    desc: "Indoor and outdoor sports facilities promoting physical fitness."
  },
  {
    icon: <FaUtensils />,
    title: "Cafeteria",
    desc: "Spacious cafeteria serving hygienic and nutritious food."
  }
];

function Facilities() {
  return (
    <section className="facilities" id="facilities">

      <div className="section-header">

        <span>CAMPUS FACILITIES</span>

        <h2>Modern Infrastructure for Better Learning</h2>

      </div>

      <div className="facility-grid">

        {facilities.map((facility, index) => (

          <div className="facility-card" key={index}>

            <div className="facility-icon">
              {facility.icon}
            </div>

            <h3>{facility.title}</h3>

            <p>{facility.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Facilities;