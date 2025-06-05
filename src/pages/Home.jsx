import React, { useEffect } from 'react';
import '../styles/gallery.css';
import Hero from '../components/Hero';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      <section id="see-more" className="fade-scroll">
        <h2>On the Field</h2>
        <div className="gallery-grid on-field fade-scroll">
          <img src={img1} alt="On Field 1" className="gallery-img" />
          <img src={img2} alt="On Field 2" className="gallery-img" />
          <img src={img3} alt="On Field 3" className="gallery-img" />
          <img src={img4} alt="On Field 4" className="gallery-img" />
        </div>
      </section>
      <section className="fade-scroll">
        <h2>Off the Field</h2>
        <div className="gallery-grid off-field fade-scroll">
          <img src={img5} alt="Off Field 1" className="gallery-img" />
          <img src={img6} alt="Off Field 2" className="gallery-img" />
          <img src={img7} alt="Off Field 3" className="gallery-img" />
          <img src={img8} alt="Off Field 4" className="gallery-img" />
        </div>
      </section>
    </div>
  );
};

export default Home;
