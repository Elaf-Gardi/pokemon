/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  if (!pokemonDetails) {
    return <p>Loading Character...</p>;
  }

  return (
    <div>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p className='font-nunito'>{pokemonDetails.name}</p>
    </div>
  );
};

export default PokemonCard;
