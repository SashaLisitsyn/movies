import React, { useState } from 'react';

import './Search.css';

export default function Search(props) {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div>
      <div className="row">
        <input
          placeholder="Enter the title"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div className="labels">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="game"
            onChange={handleFilter}
            checked={type === 'game'}
          />
          <span>Games</span>
        </label>
      </div>
    </div>
  );
}
