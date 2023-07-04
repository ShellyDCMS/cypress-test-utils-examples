import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { PokemonList } from "../../src/pokemon-catalog/pokemon-catalog.component";
import { AppDriver } from "../support/app.driver";

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
    when.visit("/");
  });

  it("should disable next button once showing last pokemon", async () => {
    expect(await get.pokemon.isNextButtonDisabled()).to.be.true;
  });

  it("should disable prev button once showing first pokemon", async () => {
    expect(await get.pokemon.isPrevButtonDisabled()).to.be.true;
  });
});
// describe("integration", () => {
//   const pokemonList: PokemonList = {
//     next: null,
//     previous: null,
//     results: [{ name: "name", url: "1" }],
//     count: 1
//   };

//   beforeEach(() => {
//     cy.intercept("/**/pokemon/*", pokemonList);
//     cy.visit("/");
//   });

//   it("should disable next button once showing last pokemon", () => {
//     get.elementByText("Next").should("be.disabled");
//   });
// });
