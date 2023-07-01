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
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1";
  getPokemon = async (url: string = this.baseUrl): Promise<PokemonList> =>
    await (await fetch(url)).json();
}
