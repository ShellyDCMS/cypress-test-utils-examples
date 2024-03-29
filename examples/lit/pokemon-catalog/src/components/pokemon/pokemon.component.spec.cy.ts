import { then } from "@shellygo/cypress-test-utils";
import { Chance } from "chance";
import { Pokemon } from "./pokemon.component";
import { PokemonComponentDriver } from "./pokemon.component.driver";

describe("PokemonCatalogComponent Tests", () => {
  const chance = new Chance();
  const { when, given, get, beforeAndAfter } = new PokemonComponentDriver();

  beforeAndAfter();

  describe("given pokemon data", () => {
    const name = chance.word();
    const url = chance.url();

    const pokemon = {
      results: [{ name, url }],
      next: url,
      previous: url
    };

    beforeEach(() => {
      given.pokemon(pokemon);
      when.render(new Pokemon());
    });

    it("should render pokemon name", () => {
      then(get.nameText()).shouldEqual(name);
    });
  });
});
