import { SyntheticEvent, useState } from "react";
import "./pokemon-image.scss";

export interface IProps {
  pokemonIndex: number;
}

export const PokemonImageComponent = (props: IProps) => {
  const { pokemonIndex } = props;
  const [showFallbackImage, setShowFallbackImage] = useState(false);

  const onImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setShowFallbackImage(true);
  };

  const getPokemonImage = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonIndex}.gif`;

  const getFallbackImage = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <div>
      {showFallbackImage ? (
        <img data-hook="pokemon-fallback-image" src={getFallbackImage()} alt="pokemon" />
      ) : (
        <img
          data-hook="pokemon-image"
          src={getPokemonImage()}
          className="pokemon"
          alt="pokemon"
          onError={onImageError}
        />
      )}
    </div>
  );
};
