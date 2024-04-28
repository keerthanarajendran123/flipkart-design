import React from 'react';

const images = [
  {
    label: 'Wireless Headset',
    imgPath: 'images/headset2.jpg',
  },
  {
    label: 'Video Game',
    imgPath: 'images/video-game.jpg',
  },
  {
    label: 'Speaker',
    imgPath: 'images/speaker.jpg',
  },
  {
    label: 'Monitor',
    imgPath: 'images/monitor.jpg',
  },
  {
    label: 'Microwave',
    imgPath: 'images/micro.jpg',
  },
];

const CardGallery = () => {
  return (
    <div>
      <div className="card-gallery-container">
        <h2 className="gallery-title">Best of Electronics</h2>
        <div className="card-list">
          {images.map((image, index) => (
            <div key={index} className="card-item">
              <img src={image.imgPath} alt={image.label} className="card-image" />
              <h3 className="card-label">{image.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGallery;

