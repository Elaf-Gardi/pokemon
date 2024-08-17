"use client"
import React, { useEffect, useState } from "react"
import { fetchPokemonCharactersData } from "@/app/api/page"
import PokemonCharactersList from "./PokemonCharactersList"

const PokemonCharactersSection = () => {
  const [pokemonCharacters, setPokemonCharacters] = useState([])
  
  const fetchData = async () => {
    try {
      const data = await fetchPokemonCharactersData('?offset=20&limit=20');
      setPokemonCharacters(data.results);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <PokemonCharactersList pokemonCharacters={pokemonCharacters}/>
    </div>
  )
}

export default PokemonCharactersSection