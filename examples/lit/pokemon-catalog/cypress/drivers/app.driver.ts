import { CypressHelper } from "@shellygo/cypress-test-utils";
import { PokemonPageDriver } from "./pokemon-page.driver";
// import { PokemonPageDriver } from "./pokemon-page.driver";

export class AppDriver {
  private helper: CypressHelper = new CypressHelper("data-hook");
  private pokemonDriver: PokemonPageDriver = new PokemonPageDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonDriver.beforeAndAfter();
  };
  given = {
    ...this.helper.given,
    pokemon: this.pokemonDriver.given
  };

  when = {
    ...this.helper.when,
    pokemon: this.pokemonDriver.when
  };

  get = {
    ...this.helper.get,
    pokemon: this.pokemonDriver.get
  };
}
