import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchResultPage from './components/SearchResultPage';
import categoriesData from './data/categories.json';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm, navigate) => {
    const results = categoriesData.reduce((acc, category) => {
      const subcategories = category.subcategories || [];
      const matchingSubcategories = subcategories.filter(subcategory =>
        subcategory.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const submenus = subcategories.flatMap(subcategory => subcategory.submenu || []);
      const matchingSubmenus = submenus.filter(submenu =>
        submenu.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return [...acc, ...matchingSubcategories, ...matchingSubmenus];
    }, []);

    setSearchResults(results);

    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="app">
      <Router>
        <>
          <Navbar onSearch={handleSearch} /><br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<SearchResultPage results={searchResults} />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;

