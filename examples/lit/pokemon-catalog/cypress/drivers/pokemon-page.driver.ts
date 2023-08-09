import { PokemonCatalogComponentDriver } from "@components/pokemon-catalog/pokemon-catalog.component.driver";
import { PokemonList } from "@services/pokemon.service";
import { CypressHelper } from "@shellygo/cypress-test-utils";

export class PokemonPageDriver {
  private helper: CypressHelper = new CypressHelper();
  private pokemonDriver: PokemonCatalogComponentDriver = new PokemonCatalogComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonDriver.beforeAndAfter();
  };

  given = {
    ...this.pokemonDriver.given,
    fetchPokemonResponse: (response: PokemonList) =>
      this.helper.given.interceptAndMockResponse({
        url: "https://pokeapi.co/api/v2/pokemon**",
        response,
        alias: "pokemon"
      }),

    fetchImageResponse: (fileName: string) =>
      this.helper.given.interceptAndMockResponse({
        url: "/**/PokeAPI/sprites/**",
        response: { fixture: fileName },
        alias: "pokemon-image"
      })
  };

  when = {
    ...this.pokemonDriver.when,
    waitForPokemonLastCall: () => this.helper.when.waitForLastCall("pokemon")
  };

  get = {
    ...this.pokemonDriver.get,
    fetchPokemonOffset: () => this.helper.get.requestQueryParam("pokemon", "offset")
  };
}
