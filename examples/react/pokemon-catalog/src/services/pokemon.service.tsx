import { createContext } from "react";

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

export interface FetchPokemonOptions {
  url?: string;
  offset?: string;
}
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";
  getPokemon = async ({
    url = this.baseUrl,
    offset
  }: FetchPokemonOptions): Promise<PokemonList> => {
    const params = new URLSearchParams({ limit: "1" });
    const fetchUrl = new URL(url);
    offset && params.append("offset", offset);
    fetchUrl.search = params.toString();
    return await (await fetch(fetchUrl)).json();
  };
}

export const PokemonServiceContext = createContext<PokemonService | undefined>(
  undefined
);
