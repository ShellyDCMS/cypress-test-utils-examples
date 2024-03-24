import { then } from "@shellygo/cypress-test-utils";
import { PokemonGoComponent } from "./pokemon-go";
import { PokemonGoComponentDriver } from "./pokemon-go.driver";

describe("PokemonGo Component Tests", () => {
  const { when, given, get, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  beforeEach(() => {
    given.onSubmitSpy();
    when.render(PokemonGoComponent);
  });

  it("Go button should be disabled", () => {
    then(get.goButton()).shouldBeDisabled();
  });

  it("when typing index Go button should be enabled", () => {
    when.typePokemonIndex("33");
    then(get.goButton()).shouldBeEnabled();
  });

  it("when typing index and submitting should call onSubmit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    then(get.onSubmitSpy()).shouldHaveBeenCalledWith("33");
  });

  it("should not update input value when typing non digits", () => {
    when.typePokemonIndex("abcd-");
    then(get.pokemonIndexInputValue()).shouldEqual("");
  });

  it("should clear input when clicking submit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    then(get.pokemonIndexInputValue()).shouldEqual("");
  });
});
