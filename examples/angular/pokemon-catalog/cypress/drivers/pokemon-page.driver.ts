import { CypressHelper } from "@shellygo/cypress-test-utils";
import { PokemonCatalogComponentDriver } from "src/app/components/pokemon-catalog/pokemon-catalog.component.driver";
import { PokemonList } from "src/app/services/pokemon.service";

export class PokemonPageDriver {
  private helper: CypressHelper = new CypressHelper();
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
        alias: "pokemon"
      })
  };

  when = {
    ...this.pokemonDriver.when
  };

  get = {
    ...this.pokemonDriver.get,
    fetchPokemonOffset: () => {
      this.helper.when.waitForLastCall("pokemon");
      return this.helper.get.requestQueryParam("pokemon", "offset");
    }
  };
}
