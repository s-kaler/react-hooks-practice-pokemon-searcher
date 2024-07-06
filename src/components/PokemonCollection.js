import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({allPokemon, query}) {
  return (
    <Card.Group itemsPerRow={6}>
      {
        allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase())).map((pokemon) => (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id}
        />))
      }
    </Card.Group>
  );
}

export default PokemonCollection;