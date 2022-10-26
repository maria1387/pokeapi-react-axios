import { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        console.log(response);
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          ability: response.data.abilities.ability,


	

        });
        setPokemonChosen(true);
      }
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button onClick={searchPokemon}>buscar</button>
      </div>
      <div>
        {!pokemonChosen ? (
          <h1>no hay pokemom</h1>
        ) : (
          <>
           
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} />
			<h3>species : {pokemon.species}</h3>
			<h3>Type: {pokemon.type}</h3>
			<h4>hp: {pokemon.hp}</h4>
			<h4>attack: {pokemon.attack}</h4>
			<h4>defense: {pokemon.defense}</h4>
			<h4>ability: {pokemon.ability}</h4>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
