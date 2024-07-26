import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './../index.css'; 
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazyload';

function Carousel() {
  return (
    <ReactCarousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      role="region"
      aria-live="polite"
      className="carousel-container"
    >
      <div className="carousel-item">
        <LazyLoad height={300} offset={100}>
          <img src="https://via.placeholder.com/800x300" alt="Annual Sports Day - Celebrating Excellence in Sports" className="carousel-image" />
        </LazyLoad>
        <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
      </div>
      <div className="carousel-item">
        <LazyLoad height={300} offset={100}>
          <img src="https://via.placeholder.com/800x300" alt="Science Exhibition - Showcasing Student Innovations" className="carousel-image" />
        </LazyLoad>
        <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div className="carousel-item">
        <LazyLoad height={300} offset={100}>
          <img src="https://via.placeholder.com/800x300" alt="Cultural Fest - Embracing Diversity and Creativity" className="carousel-image" />
        </LazyLoad>
        <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
      </div>
    </ReactCarousel>
  );
}

export default Carousel;
