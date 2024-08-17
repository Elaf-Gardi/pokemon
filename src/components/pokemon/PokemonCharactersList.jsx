import React from 'react'
import PokemonCard from "./PokemonCard"

const PokemonCharactersList = ({pokemonCharacters}) => {
  return (
    <div>{
      pokemonCharacters.map((character)=>(
            <PokemonCard key={character.name} pokemon={character}/>
        ))}</div>
  )
}

export default PokemonCharactersList