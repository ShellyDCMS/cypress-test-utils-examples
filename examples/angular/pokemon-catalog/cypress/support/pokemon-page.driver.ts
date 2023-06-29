import { CypressHelper } from "dell-cypress-test-utils";
import { PokemonList } from "src/app/components/pokemon-catalog/pokemon-catalog.component";
import { PokemonCatalogComponentDriver } from "src/app/components/pokemon-catalog/pokemon-catalog.component.driver";

export class PokemonPageDriver {
  private helper: CypressHelper = new CypressHelper();
  private pokemonDriver: PokemonCatalogComponentDriver =
    new PokemonCatalogComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonDriver.beforeAndAfter();
  };
  given = {
    fetchPokemonResponse: (response: PokemonList) =>
      this.helper.given.interceptAndMockResponse({
        url: "/**/pokemon/*",
        response,
        alias: "pokemon"
      })
  };

  when = {
    ...this.pokemonDriver.when
  };

  get = {
    ...this.pokemonDriver.get
  };
}
