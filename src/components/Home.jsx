import React from 'react';
import categoriesData from '../data/categories.json';
import ExpandableDropdown from './ExpandableDropdown';
import Carousel from './Carousel'; 
import CardGallery from './Card'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="categories-container">
        {categoriesData.map((category) => (
          <ExpandableDropdown key={category.id} category={category} />
        ))}
      </div>
      
      <Carousel /><br />
      <CardGallery />
    </div>
  );
};

export default Home;
