import React from 'react';
import './Filters.css';
import { FaSearch } from 'react-icons/fa';

export default function Filters({
  setSearch,
  tags = [],
  setTag,
}) {
  return (
    <div className="filters-container">
      {/* <p className="">Filtrar por</p> */}
      <div className="filters">
        <div className="select-container">
            <select
              className="tags"
              onChange={(e) => {
                e.preventDefault();
                setTag(e.target.value);
              }}
            >
              <option value="none">Tema</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
        </div>

        <div className="searchbar-container">
          <input
            type="text"
            placeholder="Buscar preguntas"
            className="searchbar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-icon">
              <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
}