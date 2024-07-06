import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchTerm, setTerm] = useState("");
  const [allPokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((res)=> res.json())
    .then((fetchedPokemon) => setPokemon(fetchedPokemon))
  }, [])

  function handleSearch(e){
    setTerm(e.target.value)
  }
  function handleNewPokemon(newPokemon){
    setPokemon([...allPokemon, newPokemon])
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleNewPokemon}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection allPokemon={allPokemon} query={searchTerm}/>
    </Container>
  );
}

export default PokemonPage;
