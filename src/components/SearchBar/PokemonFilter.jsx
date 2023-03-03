import React from 'react';
import PropTypes from 'prop-types';
import './PokemonFilter.css';

const PokemonFilter = ({ onFilter }) => {
  return (
    <div className="filter-buttons">
      <button className="filter-button normal" onClick={() => onFilter('normal')}>Normal</button>
      <button className="filter-button fire" onClick={() => onFilter('fire')}>Fire</button>
      <button className="filter-button water" onClick={() => onFilter('water')}>Water</button>
      <button className="filter-button electric" onClick={() => onFilter('electric')}>Electric</button>
      <button className="filter-button grass" onClick={() => onFilter('grass')}>Grass</button>
      <button className="filter-button ice" onClick={() => onFilter('ice')}>Ice</button>
      <button className="filter-button fighting" onClick={() => onFilter('fighting')}>Fighting</button>
      <button className="filter-button poison" onClick={() => onFilter('poison')}>Poison</button>
      <button className="filter-button ground" onClick={() => onFilter('ground')}>Ground</button>
      <button className="filter-button flying" onClick={() => onFilter('flying')}>Flying</button>
      <button className="filter-button psychic" onClick={() => onFilter('psychic')}>Psychic</button>
      <button className="filter-button bug" onClick={() => onFilter('bug')}>Bug</button>
      <button className="filter-button rock" onClick={() => onFilter('rock')}>Rock</button>
      <button className="filter-button ghost" onClick={() => onFilter('ghost')}>Ghost</button>
      <button className="filter-button dragon" onClick={() => onFilter('dragon')}>Dragon</button>
      <button className="filter-button dark" onClick={() => onFilter('dark')}>Dark</button>
      <button className="filter-button steel" onClick={() => onFilter('steel')}>Steel</button>
      <button className="filter-button fairy" onClick={() => onFilter('fairy')}>Fairy</button>
    </div>
  );
};

PokemonFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default PokemonFilter;