import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

// img
import image1 from '../../img/1.jpg'
import image2 from '../../img/2.jpg'
import image3 from '../../img/3.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <div
          className="d-block slide-image"
          style={{backgroundImage: `url(${image1})`}}
          alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block slide-image"
          style={{backgroundImage: `url(${image2})`}}
          alt="Second slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block slide-image"
          style={{backgroundImage: `url(${image3})`}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;