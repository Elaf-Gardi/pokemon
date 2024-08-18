/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import { colorsType } from "@/utils/colorsType/colorsType"
import Link from "next/link"

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null)

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setPokemonDetails(data)
      } catch (error) {
        console.error("Failed to fetch Pokémon details:", error)
      }
    }

    fetchPokemonDetails()
  }, [pokemon.url])

  if (!pokemonDetails) {
    return <p>Loading Character...</p>
  }

  const pokemonType = pokemonDetails.types.map((typeName) => typeName.type.name)
  const cardBackgroundColor =
    pokemonType.length > 1
      ? colorsType[pokemonType[0]]
      : colorsType[pokemonType[0]]

  return (
    <Link href={`/pokemon/${pokemonDetails.id}`}>
    <div
      className="w-64 h-32 rounded-lg mb-2 flex items-center justify-center"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div className=" p-4 flex flex-col justify-center">
        <p className="font-nunito font-extrabold text-lg text-white mb-4">
          {pokemonDetails.name.charAt(0).toUpperCase() +
            pokemonDetails.name.slice(1)}
        </p>

        <div className="flex flex-row gap-2 items-center justify-start">
          {pokemonType.map((type) => {
            const capitalizedPokemonType =
              type.charAt(0).toUpperCase() + type.slice(1)
            return (
              <span
                key={type}
                className="py-1 px-2 rounded-lg text-white font-semibold pokemonTypeBackgroundStyle"
              >
                {capitalizedPokemonType}
              </span>
            )
          })}
        </div>
      </div>

      <div className="relative flex items-center justify-center w-36 h-40">
        <img
          src={pokemonDetails.sprites.front_shiny}
          alt={pokemonDetails.name}
          className="absolute  w-24 h-24"
          style={{ zIndex: 1 }}
        />
        <div className="absolute top-0 -right-4 w-full h-full pokeballBackgroundImage" />
      </div>
    </div>
    </Link>
  )
}

export default PokemonCard
