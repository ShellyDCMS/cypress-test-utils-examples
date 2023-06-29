import { useEffect, useState } from "react";
import {
  PokemonCatalogComponent,
  PokemonList
} from "./pokemon-catalog.component";

export const PokemonCatalog = () => {
  const [pokemon, setPokemon] = useState<PokemonList>();

  const fetchNext = async () =>
    pokemon &&
    pokemon.next &&
    setPokemon(await (await fetch(pokemon.next)).json());

  const fetchPrev = async () =>
    pokemon &&
    pokemon.previous &&
    setPokemon(await (await fetch(pokemon.previous)).json());

  useEffect(() => {
    const getFirstPokemon = async () =>
      setPokemon(
        await (await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1")).json()
      );

    getFirstPokemon();
  }, []);

  return (
    <PokemonCatalogComponent
      pokemon={pokemon}
      onNext={fetchNext}
      onPrev={fetchPrev}
    ></PokemonCatalogComponent>
  );
};
