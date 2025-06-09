import React, { useEffect } from 'react';
import '../styles/gallery.css';
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
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
      <div className="hero-divider" />
      <section id="see-more" className="fade-scroll">
        <h2>On the Field</h2>
        <ImageCarousel
          images={[img1, img2, img3, img4]}
          className="on-field"
        />
      </section>
      <section className="fade-scroll">
        <h2>Off the Field</h2>
        <ImageCarousel
          images={[img5, img6, img7, img8]}
          className="off-field"
        />
      </section>
    </div>
  );
};

export default Home;
