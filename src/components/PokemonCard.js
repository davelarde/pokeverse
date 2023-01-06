import React, { useEffect } from 'react';

function PokemonCard({ url, name, setPokemons, filteredPokemons }) {
  const [urlData, setUrlData] = useState([])
  useEffect(()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
      setUrlData(data);
    });
  },[filteredPokemons]);
  

  return (
    <div>
        pokemon card
    </div>
  );
}

export { PokemonCard };
