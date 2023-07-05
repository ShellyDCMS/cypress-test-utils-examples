// Kindacode.com
import React, { useState } from "react";

interface IProps {
  onSubmit: (searchedPokemon: string) => void;
}
export const PokemonGo = ({ onSubmit }: IProps) => {
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [value, setValue] = useState("");

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
      <input value={value} onChange={onChange} placeholder="Search Pokemon" />

      <button type="submit">Go</button>
    </form>
  );
};
