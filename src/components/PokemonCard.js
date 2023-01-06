import React, { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card"

function PokemonCard({ url, name, setPokemons, filteredPokemons }) {
  const [urlData, setUrlData] = useState([])
  useEffect(()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
      setUrlData(data);
    });
  },[filteredPokemons]);
  
let abilities = urlData.abilities;
  return (
    <>
    <Card>
      <Card.Img style={{ width: "100px" }} src={urlData.sprites?.front_default} />
      <Card.Body>
        <Card.Title>{urlData.name}</Card.Title>
        <Card.Text as='div'><ul>{abilities && abilities.map((a, index) => <li key= {index}>{a.ability.name}</li>)}</ul></Card.Text>
      </Card.Body>
    </Card><div>
        pokemon card
      </div>
      </>
  );
}

export { PokemonCard };
