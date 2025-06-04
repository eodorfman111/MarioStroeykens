import React from "react";
import instagramIcon from "../assets/icons/instagram.svg";
import xIcon from "../assets/icons/twitter.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>For media inquiries, collaborations, or professional opportunities, feel free to reach out:</p>
      <div className="social-icons">
        <a href="https://instagram.com/m.stroeykens" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X (Twitter)" />
        </a>
        <a href="https://youtube.com/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
