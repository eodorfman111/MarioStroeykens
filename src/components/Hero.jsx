import React from 'react';
import '../styles/hero.css';
import heroVideo from '../assets/images/mariovideo/mariovideo.mp4';
import heroPoster from '../assets/mario-hero.jpg';

const Hero = () => {
  const handleSeeMore = () => {
    if (window.innerWidth <= 768) {
      const target = document.getElementById('see-more');
      if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - 56;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
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
          See More
        </button>
      </div>
    </section>
  );
};

export default Hero;
