import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <div>
        <p>{pokemon.name}</p>
    </div>
  )
}

export default PokemonCard