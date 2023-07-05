import { useContext, useEffect, useState } from "react";
import "../../App.scss";
import {
  PokemonList,
  PokemonService,
  PokemonServiceContext
} from "../../services/pokemon.service";
import { PokemonImageComponent } from "../pokemon-image/pokemon-image.component";
export interface IPokemonCatalogComponentsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export const PokemonCatalogComponent = (
  props: IPokemonCatalogComponentsProps
) => {
  const { onNext, onPrev } = props;
  const [pokemon, setPokemon] = useState<PokemonList>();
  const pokemonService: PokemonService | undefined = useContext(
    PokemonServiceContext
  );
  const fetchNext = async () => {
    pokemon &&
      pokemon.next &&
      setPokemon(await pokemonService?.getPokemon(pokemon.next));
    onNext && onNext();
  };

  const fetchPrev = async () => {
    pokemon &&
      pokemon.previous &&
      setPokemon(await pokemonService?.getPokemon(pokemon.previous));
    onPrev && onPrev();
  };

  useEffect(() => {
    const getFirstPokemon = async () =>
      setPokemon(await pokemonService?.getPokemonByOffset());
    getFirstPokemon();
  }, [pokemonService]);

  const getPokemonIndex = () =>
    Number(
      pokemon?.results[0].url
        .split("/")
        .filter(element => element)
        .pop()
    );
  const getPokemonName = () => pokemon?.results[0].name;

  return (
    <div>
      <header>
        {pokemon && (
          <>
            <PokemonImageComponent pokemonIndex={getPokemonIndex()} />
            <h2 data-cy="pokemon-name">{getPokemonName()}</h2>
            <div data-cy="count">{`${getPokemonIndex()} of ${
              pokemon.count
            }`}</div>
            <div>
              <button
                data-cy="prev"
                onClick={fetchPrev}
                disabled={!(pokemon && pokemon.previous)}
              >
                Prev
              </button>
              <button
                data-cy="next"
                onClick={fetchNext}
                disabled={!(pokemon && pokemon.next)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </header>
    </div>
  );
};
