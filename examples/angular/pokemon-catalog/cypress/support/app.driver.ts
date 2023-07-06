import { CypressHelper } from "@shellygo/cypress-test-utils";
import { PokemonPageDriver } from "./pokemon-page.driver";

export class AppDriver {
  private helper: CypressHelper = new CypressHelper();
  private pokemonDriver: PokemonPageDriver = new PokemonPageDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonDriver.beforeAndAfter();
  };
  given = {
    pokemon: this.pokemonDriver.given
  };

  when = {
    pokemon: this.pokemonDriver.when
  };

  get = {
    pokemon: this.pokemonDriver.get
  };
}
