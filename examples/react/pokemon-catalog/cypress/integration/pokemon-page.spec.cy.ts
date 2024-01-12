import { PokemonList } from "@services/pokemon.service";
import { then } from "@shellygo/cypress-test-utils/assertable";
import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { AppDriver } from "../drivers/app.driver";

describe("Pokemon Page integration Tests", () => {
  const chance = new Chance();
  const { when, given, get, beforeAndAfter } = new AppDriver();
  beforeAndAfter();

  describe("given a single pokemon", () => {
    const pokemonList: PokemonList = Builder<PokemonList>()
      .results([{ name: chance.word(), url: "1" }])
      .count(1)
      .build();

    beforeEach(() => {
      given.pokemon.fetchPokemonResponse(pokemonList);
      given.pokemon.fetchImageResponse("default.png");
      when.visit("/");
    });

    it("should disable next button once showing last pokemon", () => {
      then(get.pokemon.nextButton()).shouldBeDisabled();
    });

    it("should disable prev button once showing first pokemon", () => {
      then(get.pokemon.prevButton()).shouldBeDisabled();
    });
  });
});
