import PokemonCardDetails from '@/components/pokemon/PokemonCardDetails'
import React from 'react'
import { fetchPokemonCharactersData } from '@/utils/api/page'

const page = async ({ params }) => {
  const {PokemonId} = params
  const characterDetails = await fetchPokemonCharactersData(`${PokemonId}`)
  
  return (
    <>
    <PokemonCardDetails details={characterDetails}/>
    </>
  )
}

export default page