import React from "react"
import PokemonCard from "./PokemonCard"

const PokemonCharactersList = ({ pokemonCharacters }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center p-4 gap-5">
      {pokemonCharacters.map((character) => (
        <PokemonCard key={character.id} pokemon={character} />
      ))}
    </div>
  )
}

export default PokemonCharactersList
