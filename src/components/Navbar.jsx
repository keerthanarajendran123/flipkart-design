import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine, RiShoppingCartLine, RiMoonLine } from 'react-icons/ri'; 
import categoriesData from '../data/categories.json';
import '../styles/Navbar.css';

// Navbar component
const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); 

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    getSuggestions(searchText);
  };

  // Function to get search suggestions
  const getSuggestions = (searchText) => {
    if (searchText.trim() !== '') {
      const matchingSuggestions = categoriesData.reduce((acc, category) => {
        const allItems = [];
        allItems.push(...(category.subcategories || []).map(subcategory => subcategory.name.toLowerCase()));
        (category.subcategories || []).forEach(subcategory => {
          allItems.push(...(subcategory.submenu || []).map(submenu => submenu.name.toLowerCase()));
        });
        const filteredSuggestions = allItems.filter(item =>
          item.toLowerCase().includes(searchText.toLowerCase())
        );
        return [...acc, ...filteredSuggestions];
      }, []);
      setSuggestions(matchingSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Function to handle search button click
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm, navigate);
      setSearchTerm('');
    } else {
      alert('Please enter the product name.');
    }
    setSuggestions([]);
  };

  // Function to handle suggestion selection
  const handleSuggestionSelect = (selectedSuggestion) => {
    setSearchTerm(selectedSuggestion);
    setSuggestions([]);
  };

  // Suggestions dropdown component
  const SuggestionsDropdown = () => {
    return (
      <div className="suggestions-dropdown">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index} 
            onClick={() => handleSuggestionSelect(suggestion)}
            className="suggestion-item"
          >
            {suggestion}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="navbar">
      <img src="/images/flipkart_plus_offers.png" alt="Flipkart Icon" className="logo" />
      <div className="search-container">
        <div className="search-icon">
          <RiSearchLine />
        </div>
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {suggestions.length > 0 && searchTerm.trim() !== '' && <SuggestionsDropdown />}
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>
      <RiShoppingCartLine size={24} className="cart-icon" />
      <RiMoonLine size={24} className="moon-icon" />
    </div>
  );
};

export default Navbar;
