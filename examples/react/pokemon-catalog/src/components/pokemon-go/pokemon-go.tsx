import React, { useState } from "react";

export interface IProps {
  onSubmit: (searchedPokemon: string) => void;
}
export const PokemonGoComponent = ({ onSubmit }: IProps) => {
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [pokemonIndex, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digitsRegex = /^[0-9\b]+$/;
    if (event.target.value === "" || digitsRegex.test(event.target.value)) {
      setSearchedPokemon(event.target.value);
      setValue(event.target.value);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchedPokemon);
        setValue("");
      }}
    >
      <input data-cy="pokemon-index" value={pokemonIndex} onChange={onChange} placeholder="Pokemon" />
      <button type="submit" data-cy="go" disabled={pokemonIndex === ""}>
        Go
      </button>
    </form>
  );
};
