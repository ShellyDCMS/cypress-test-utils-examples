import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { AppDriver } from "cypress/drivers/app.driver";
import { PokemonList } from "src/app/services/pokemon.service";

describe("Angular Pokemon Page integration Tests", () => {
  const chance = new Chance();

  const { when, given, get, beforeAndAfter } = new AppDriver();
  beforeAndAfter();
  const pokemonList: PokemonList = Builder<PokemonList>()
    .results([{ name: chance.word(), url: "1" }])
    .count(1)
    .build();

  beforeEach(() => {
    given.pokemon.fetchPokemonResponse(pokemonList);
    given.pokemon.fetchImageResponse("default.png");
    when.visit("/");
  });

  it("should disable next button once showing last pokemon", async () => {
    expect(await get.pokemon.isNextButtonDisabled()).to.be.true;
  });

  it("should disable prev button once showing first pokemon", async () => {
    expect(await get.pokemon.isPrevButtonDisabled()).to.be.true;
  });
});
