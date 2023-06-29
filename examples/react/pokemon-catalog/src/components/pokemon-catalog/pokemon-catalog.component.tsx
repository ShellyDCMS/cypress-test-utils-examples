import "../../App.scss";
import { PokemonImageComponent } from "../pokemon-image/pokemon-image.component";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
export interface IProps {
  pokemon: PokemonList | undefined;
  onPrev: () => void;
  onNext: () => void;
}

export const PokemonCatalogComponent = (props: IProps) => {
  const { pokemon, onNext, onPrev } = props;

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

            <div>
              <button
                data-cy="prev"
                onClick={onPrev}
                disabled={!(pokemon && pokemon.previous)}
              >
                Prev
              </button>
              <button
                data-cy="next"
                onClick={onNext}
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
