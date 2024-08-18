"use client"
import React, { useEffect, useState } from "react"
import { fetchPokemonCharactersData } from "@/utils/api/page"
import PokemonCharactersList from "./PokemonCharactersList"

const PokemonCharactersSection = () => {
  const [pokemonCharacters, setPokemonCharacters] = useState([])
  
  const fetchData = async () => {
    try {
      const data = await fetchPokemonCharactersData('?limit=55');
      setPokemonCharacters(data.results);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="">
      <PokemonCharactersList pokemonCharacters={pokemonCharacters}/>
    </div>
  )
}

export default PokemonCharactersSection