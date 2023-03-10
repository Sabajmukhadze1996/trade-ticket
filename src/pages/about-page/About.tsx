import React from "react";
import "./about.css";
import companyImg from "../../images/company.jpg";
import missionImg from "../../images/mission.jpg";
import visionImg from "../../images/vision.jpg";
import valuesImg from "../../images/values.jpg";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-container-inner-container">
          <h1>About Us</h1>
          <div className="about-info">
            <img src={companyImg} alt="About Us" />
            <div className="about-text">
              <h2>Welcome to TradeTKT !</h2>
              <p>
                Our goal is to solve all problems associated with reselling
                tickets. The user will be able to find the desired event quickly
                and easily to attend it, even if the tickets are sold out.
                <br />
                On the other hand, we help users to sell tickets for the event
                they are attending For some reason they can't go anymore.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <img src={missionImg} alt="Card 1" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to create a comfortable, user-friendly and safe
            online platform, which The purpose will be the resale of...
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="about-card">
          <img src={visionImg} alt="Card 2" />
          <h3>Our Vision</h3>
          <p>
            Our goal is to solve all problems associated with reselling tickets.
            The user will be able to find the desired event quickly and
            easily...
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="about-card">
          <img src={valuesImg} alt="Card 3" />
          <h3>Our Values</h3>
          <p>
            With all this, we event organizers avoid all those Troubles with
            ticket resale due to fraud caused by...
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default About;
