import React from 'react';
import '../styles/gallery.css';
import ImageCarousel from './ImageCarousel';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';

const OnOffFieldGallery = () => {
  return (
    <div>
      <section>
        <h2>On the Field</h2>
        <ImageCarousel images={[img1, img2, img3, img4]} className="on-field" />
      </section>
      <section>
        <h2>Off the Field</h2>
        <ImageCarousel images={[img5, img6, img7, img8]} className="off-field" />
      </section>
    </div>
  );
};

export default OnOffFieldGallery;
