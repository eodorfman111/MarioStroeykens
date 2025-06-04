import React from "react";
import "../index.css";
import heroImage from "../assets/images/14.jpg"; // Replace with your preferred image

const About = () => {
  return (
    <div className="about">
      <div className="about-banner" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="about-overlay">
          <div className="about-text">
            <h1>Meet Mario Stroeykens</h1>
            <p>
              Mario Stroeykens is one of Belgium’s most exciting young footballers. Known for his creativity, agility, and
              tactical awareness, he plays with a maturity far beyond his years. Whether representing his club or country,
              Mario is consistently proving himself as a rising star in European football.
              <br /><br />
              Off the pitch, Mario is a symbol of ambition, style, and authenticity. From fashion campaigns to community
              work, his influence is steadily growing—balancing professional discipline with cultural expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
