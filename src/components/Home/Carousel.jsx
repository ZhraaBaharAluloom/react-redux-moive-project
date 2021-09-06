import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

// style
import './style.css';

// img
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} style={{height: '100vh'}}>
      <Carousel.Item>
        <div
          className="d-block slide-image"
          style={{backgroundImage: `url(${image1})`}}
          />
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block slide-image"
          style={{backgroundImage: `url(${image2})`}}
          />
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block slide-image"
          style={{backgroundImage: `url(${image3})`}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;