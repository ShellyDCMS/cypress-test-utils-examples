// Kindacode.com
import React, { useState } from "react";

interface IProps {
  onSubmit: (searchedPokemon: string) => void;
}
export const PokemonGo = ({ onSubmit }: IProps) => {
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [value, setValue] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPokemon(event.target.value);
    setValue(event.target.value);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchedPokemon);
        setValue("");
      }}
    >
      <input
        value={value}
        onChange={inputHandler}
        placeholder="Search Pokemon"
      />

      <button type="submit">Go</button>
    </form>
  );
};
