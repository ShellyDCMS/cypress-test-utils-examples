import { useCallback, useContext, useEffect, useState } from "react";
import "../../App.scss";
import { IPokemonService, PokemonList, PokemonServiceContext } from "../../services/pokemon.service";
import { PokemonImageComponent } from "../pokemon-image/pokemon-image.component";
export interface IPokemonCatalogComponentsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export const PokemonCatalogComponent = (props: IPokemonCatalogComponentsProps) => {
  const { onNext, onPrev } = props;
  const [pokemon, setPokemon] = useState<PokemonList>();
  const pokemonService: IPokemonService | undefined = useContext(PokemonServiceContext);
  const fetchNext = async () => {
    if (pokemon && pokemon.next) {
      const nextPokemon = await pokemonService?.getPokemon(pokemon.next);
      setPokemon(nextPokemon);
    }
    onNext && onNext();
  };

  const fetchPrev = async () => {
    if (pokemon && pokemon.previous) {
      const prevPokemon = await pokemonService?.getPokemon(pokemon.previous);
      setPokemon(prevPokemon);
    }
    onPrev && onPrev();
  };

  const fetchByOffset = useCallback(
    async (index: string) => {
      const getOffsetFromIndex = (index: string) => (Number(index) - 1).toString();
      const offset: string = getOffsetFromIndex(index);
      const pokemon = await pokemonService?.getPokemonByOffset(offset);
      if (pokemon?.results.length) {
        setPokemon(pokemon);
      } else {
        alert(`pokemon ${index} not found`);
      }
    },
    [pokemonService]
  );

  const getFirstPokemon = useCallback(async () => fetchByOffset("1"), [fetchByOffset]);
  useEffect(() => {
    getFirstPokemon();
  }, [getFirstPokemon]);

  const getPokemonIndex = () =>
    Number(
      pokemon?.results[0]?.url
        .split("/")
        .filter(element => element)
        .pop() || 0
    );
  const getPokemonName = () => pokemon?.results[0]?.name;

  return (
    <div>
      <header>
        {pokemon && (
          <>
            <PokemonImageComponent pokemonIndex={getPokemonIndex()} />
            <h2 data-cy="pokemon-name">{getPokemonName()}</h2>
            <div data-cy="count">{`${getPokemonIndex()} of ${pokemon.count}`}</div>
            <div>
              <button data-cy="prev" onClick={fetchPrev} disabled={!(pokemon && pokemon.previous)}>
                Prev
              </button>
              <button data-cy="next" onClick={fetchNext} disabled={!(pokemon && pokemon.next)}>
                Next
              </button>
            </div>
          </>
        )}
      </header>
    </div>
  );
};
