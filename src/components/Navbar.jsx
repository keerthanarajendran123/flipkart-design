import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine, RiShoppingCartLine, RiMoonLine } from 'react-icons/ri'; // Import icons from react-icons
import categoriesData from '../data/categories.json';
import '../styles/Navbar.css';

// Navbar component
const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Get navigate function from useNavigate

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
      <img src="data:image/jpeg;base64,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" alt="Flipkart Icon" className="logo" />
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
