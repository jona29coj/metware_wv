import React from 'react';
import './SearchBar.css'; // Import the CSS for styling

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
