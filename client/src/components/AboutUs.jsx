import {useNavigate} from "react-router-dom";
import "../styles/AboutUs.scss";

const AboutUs = () => {

  const navigate = useNavigate();

  return (
    <div className="about">

      {/* HERO */}
      <section className="about__hero">
        <div className="about__hero-content">
          <h1>Creating Unforgettable Events</h1>
          <p>
            We are a professional event planning company dedicated to
            organizing beautiful, memorable and perfectly executed events.
          </p>
          <button onClick={()=>navigate("/contact")}>Book an Event</button>
        </div>
      </section>

      <section>
        <div className="container">
          About us
        </div>
      </section>

      {/* TEAM */}
      <section className="about__team">
        <h2>Meet Our Team</h2>

        <div className="team">

          <div className="member">
            <img src="https://randomuser.me/api/portraits/women/44.jpg"/>
            <h4>Sarah Johnson</h4>
            <p>Creative Director</p>
          </div>

          <div className="member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg"/>
            <h4>Michael Brown</h4>
            <p>Event Coordinator</p>
          </div>

          <div className="member">
            <img src="https://randomuser.me/api/portraits/women/68.jpg"/>
            <h4>Emily Davis</h4>
            <p>Decor Specialist</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <h2>Ready to Plan Your Event?</h2>
        <p>Let’s work together to make your event unforgettable.</p>
        <button onClick={()=>navigate("/contact")}>Contact Us</button>
      </section>

    </div>
  );
};

export default AboutUs;