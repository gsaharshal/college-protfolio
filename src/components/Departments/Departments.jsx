import "./Departments.css";
import { FaArrowRight } from "react-icons/fa";

const departments = [
  {
    name: "Computer Science & Engineering",
    image: "/departments/cse.jpg",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    image: "/departments/aiml.jpg",
  },
  {
    name: "Electronics & Communication",
    image: "/departments/ece.jpg",
  },
  {
    name: "Electrical & Electronics",
    image: "/departments/eee.jpg",
  },
  {
    name: "Mechanical Engineering",
    image: "/departments/mech.jpg",
  },
  {
    name: "Civil Engineering",
    image: "/departments/civil.jpg",
  }
];

function Departments() {
  return (
    <section className="departments" id="departments">

      <div className="section-header">

        <span>DEPARTMENTS</span>

        <h2>Academic Programs</h2>

      </div>

      <div className="department-grid">

        {departments.map((dept, index) => (

          <div className="department-card" key={index}>

            <img src={dept.image} alt={dept.name} />

            <div className="department-overlay">

              <h3>{dept.name}</h3>

              <p>{dept.desc}</p>

              <button>

                Explore

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Departments;