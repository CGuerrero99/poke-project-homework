import React, { Component } from 'react';
import axios from 'axios';
import PokemonFilter from './PokemonFilter'; // Importamos el componente PokemonFilter


class PokemonList extends Component {
  state = {
    pokemons: [],
    filteredPokemons: [] // Agregamos un nuevo estado para almacenar los pokemones filtrados
  };

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
      .then(res => {
        const pokemons = res.data.results;
        const pokemonDataRequests = pokemons.map(pokemon => axios.get(pokemon.url));
        Promise.all(pokemonDataRequests)
          .then(responses => {
            const pokemonData = responses.map(res => res.data);
            this.setState({ pokemons: pokemonData, filteredPokemons: pokemonData }); // Actualizamos ambos estados con los datos de todos los pokemones
          })
          
      })
      
  }

  // Agregamos una nueva función para manejar el filtro de pokemones
  handleFilter = (element) => {
    const filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.types.some(type => type.type.name === element));
    this.setState({ filteredPokemons }); // Actualizamos el estado de los pokemones filtrados
  }

  render() {
    return (
      <div>
        <h1 className='mt-5'>Pokemon List</h1>
        <PokemonFilter onFilter={this.handleFilter} /> 
        <div className="pokemon-list row justify-content-center">
          {this.state.filteredPokemons.map(pokemon => // Renderizamos los pokemones filtrados en lugar de los pokemones sin filtrar
            <div key={pokemon.name} className="card bg-secondary m-2 pokemon-card text-center" style={{width: '18rem'}}>
              <div className='card text-black id-pk row justify-content-start' > #{pokemon.id} </div>
              <div className="card text-black pokemon-name row justify-content-end"  >{pokemon.name}</div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />

              <div className='card m-2 pokemon-type text-warning-emphasis'>{pokemon.types[0].type.name}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
}

export default PokemonList;