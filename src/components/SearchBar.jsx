// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ setSearchQuery, handleSearch }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a hero..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-secondary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
