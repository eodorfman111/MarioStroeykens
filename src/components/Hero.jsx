import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';
import heroVideo from '../assets/images/mariovideo/mariovideo.mp4';
import heroPoster from '../assets/mario-hero.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/highlights');
  };

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
        <button type="button" className="hero-btn" onClick={handleSeeMore}>
          Explore Highlights
        </button>
      </div>
    </section>
  );
};

export default Hero;
