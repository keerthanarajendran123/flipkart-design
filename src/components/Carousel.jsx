import React, { useState, useEffect } from 'react';

const styles = {
  carousel: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  slideContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease', 
  },
  slide: {
    flex: '0 0 100%',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    objectFit: 'cover',
  },
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      imgPath: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4e1683644b55c4d5.jpg?q=20',
      width: '100%',
    },
    {
      imgPath: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f306509b80281322.png?q=20',
      width: '100%',
    },
    {
      imgPath: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20',
      width: '100%',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.carousel}>
      <div style={{ ...styles.slideContainer, transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} style={styles.slide}>
            <img src={image.imgPath} alt={`Slide ${index + 1}`} style={{ ...styles.image, width: image.width }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
