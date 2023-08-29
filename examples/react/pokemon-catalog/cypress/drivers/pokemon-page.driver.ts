import { CypressHelper } from "@shellygo/cypress-test-utils";
import { PokemonCatalogComponentDriver } from "../../src/components/pokemon-catalog/pokemon-catalog.component.driver";
import { PokemonList } from "../../src/services/pokemon.service";

export class PokemonPageDriver {
  private helper: CypressHelper = new CypressHelper("data-hook");
  private pokemonDriver: PokemonCatalogComponentDriver = new PokemonCatalogComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonDriver.beforeAndAfter();
  };
  given = {
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
    fetchPokemonQueryParams: () => this.helper.get.requestQueryParams("pokemon")
  };
}
