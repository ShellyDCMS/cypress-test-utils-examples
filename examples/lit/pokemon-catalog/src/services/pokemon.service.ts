import { createContext } from "@lit-labs/context";

export const PokemonServiceContext = createContext<PokemonService>(
  "__pokemon_context__"
);

export interface PokemonService {
  pokemonService: () => PokemonInternalService;
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

export class PokemonInternalService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1";
  getPokemon = async (url: string = this.baseUrl): Promise<PokemonList> =>
    await (await fetch(url)).json();
}
