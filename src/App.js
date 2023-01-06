import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])

  useEffect(() =>{
    fetch(pokeApi)
    .then((res) => res.json())
    .then((data) =>{
      setPokemons(data.results);
      setFilteredPokemons(data.results);
    });
  }, []);

  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <PokemonCard />
    </div>
  );
}

export { App };
