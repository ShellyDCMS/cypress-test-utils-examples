import { useContext, useEffect, useState } from "react";
import "../../App.scss";
import {
  PokemonList,
  PokemonService,
  PokemonServiceContext
} from "../../services/pokemon.service";
import { PokemonGo } from "../pokemon-go/pokemon-go";
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
      setPokemon(await pokemonService?.getPokemon({ url: pokemon.next }));
    onNext && onNext();
  };

  const fetchPrev = async () => {
    pokemon &&
      pokemon.previous &&
      setPokemon(await pokemonService?.getPokemon({ url: pokemon.previous }));
    onPrev && onPrev();
  };

  const fetchByOffset = async (offset: string) => {
    try {
      setPokemon(await pokemonService?.getPokemon({ offset }));
    } catch {}
  };
  useEffect(() => {
    const getFirstPokemon = async () =>
      setPokemon(await pokemonService?.getPokemon({}));
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
            <div data-cy="count">{`${getPokemonIndex()} of ${
              pokemon.count
            }`}</div>

            <PokemonImageComponent pokemonIndex={getPokemonIndex()} />
            <PokemonGo onSubmit={value => fetchByOffset(value)} />
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
            <div data-cy="pokemon-name">{getPokemonName()}</div>
          </>
        )}
      </header>
    </div>
  );
};
