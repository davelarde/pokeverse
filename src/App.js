import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import  InputGroup  from 'react-bootstrap/InputGroup';
import {Container, Row, Col} from 'react-bootstrap'

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
// console.log(pokemons)

function onChange(e){
const value= e.target.value
// console.log(value)
const regex = new RegExp(value, 'gi')
}
  return (
    <div data-testid="app">
      <Navigation />
      

      <h1>Pokemon should appear here</h1>
      <PokemonCard />
    </div>
  );
}

export { App };
