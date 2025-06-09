import React, { useRef, useState, useEffect } from 'react';
import '../styles/carousel.css';

const ImageCarousel = ({ images, className = '' }) => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const i = Math.round(container.scrollLeft / container.clientWidth);
      setIndex(i);
    };
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-track" ref={containerRef}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="" className="carousel-img" />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span key={i} className={i === index ? 'active' : ''}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
