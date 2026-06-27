import "./Events.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaLaptopCode,
  FaTrophy
} from "react-icons/fa";

const events = [
  {
    title: "National Technical Fest",
    date: "February 2026",
    icon: <FaUsers />,
    image: "/events/event3.jpg",
    desc: "Annual technical festival featuring coding competitions, robotics, paper presentations and project expos."
  },
  {
    title: "Annual Sports Meet",
    date: "January 2026",
    icon: <FaTrophy />,
    image: "/events/event2.jpg",
    desc: "Inter-department sports competitions encouraging teamwork, leadership and fitness."
  },
  {
    title: "Campus Recruitment Drive",
    date: "February 2026",
    icon: <FaUsers />,
    image: "/events/event7.jpg",
    desc: "Top companies visited the campus offering placements and internship opportunities."
  },
  {
    title: "Innovation Workshop",
    date: "April 2026",
    icon: <FaCalendarAlt />,
    image: "/events/event4.jpg",
    desc: "Hands-on workshops conducted by industry experts on AI, Cloud and Full Stack Development."
  }
];

function Events() {
  return (
    <section className="events" id="events">

      <div className="section-header">
        <span>COLLEGE EVENTS</span>
        <h2>Latest Campus Activities</h2>
      </div>

      <div className="events-grid">

        {events.map((event, index) => (

          <div className="event-card" key={index}>

            <div className="event-image">

              <img src={event.image} alt={event.title} />

            </div>

            <div className="event-content">

              <div className="event-icon">
                {event.icon}
              </div>

              <span>{event.date}</span>

              <h3>{event.title}</h3>

              <p>{event.desc}</p>

              <button>
                Read More
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Events;