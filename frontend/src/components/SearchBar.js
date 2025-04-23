import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission page reload
    if (inputValue.trim()) { // Only search if input is not just whitespace
      onSearch(inputValue);
    }
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Describe the scene you want to generate..."
        aria-label="Scene description"
      />
      <button type="submit" className="search-button">
        Generate
      </button>
    </form>
  );
}

export default SearchBar; 