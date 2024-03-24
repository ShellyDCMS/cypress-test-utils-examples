import { createContext } from "@lit-labs/context";

export const PokemonServiceContext = createContext<PokemonServicePovider>("__pokemon_context__");

export interface PokemonServicePovider {
  getPokemonService: () => () => PokemonService;
}
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

export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";
  getPokemon = async (url: string | URL): Promise<PokemonList> => await (await fetch(url)).json();

  getPokemonByOffset = async (offset: string = "0"): Promise<PokemonList> => {
    const params = new URLSearchParams({ limit: "1", offset });
    const fetchUrl = new URL(this.baseUrl);
    fetchUrl.search = params.toString();
    return this.getPokemon(fetchUrl);
  };
}
