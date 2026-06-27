import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-header">
        <span>CONTACT US</span>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h3>Address</h3>
              <p>Bonam Venkata Chalamayya Engineering College, Odalarevu, Andhra Pradesh</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 98496 42742</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>bvce@bvcgroup.in</p>
            </div>
          </div>

          <div className="info-card">
            <FaGlobe />
            <div>
              <h3>Website</h3>
              <p>https://bvcec.edu.in/</p>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;