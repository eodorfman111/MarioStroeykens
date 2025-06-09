import React from 'react';
import '../styles/hero.css';
import heroVideo from '../assets/images/mariovideo/mariovideo.mp4';
import heroPoster from '../assets/mario-hero.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-wrapper">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Mario Stroeykens</h1>
        <p>Official Website</p>
        <a href="#see-more" className="hero-btn">See More</a>
      </div>
    </section>
  );
};

export default Hero;
