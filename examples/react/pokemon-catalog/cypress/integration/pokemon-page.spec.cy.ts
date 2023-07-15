import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { PokemonList } from "../../src/services/pokemon.service";
import { AppDriver } from "../drivers/app.driver";

describe("React Pokemon Page integration Tests", () => {
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

  it("should fetch pokemon by index", async () => {
    when.pokemon.pokemonGo.typePokemonIndex("78");
    when.pokemon.pokemonGo.clickGo();
    expect(await get.pokemon.fetchPokemonOffset()).to.eq("77");
  });
});
