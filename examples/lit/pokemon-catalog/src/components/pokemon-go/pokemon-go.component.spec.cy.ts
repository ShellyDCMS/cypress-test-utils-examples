import { then } from "@shellygo/cypress-test-utils/assertable";
import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("PokemonGo Component Tests", () => {
  const { when, given, get, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  beforeEach(() => {
    given.onSubmitSpy();
    when.render(new PokemonGoComponent());
  });

  it("Go button should be disabled", () => {
    then(get.goButton()).shouldBeDisabled();
  });

  it("when typing index Go button should be enabled", () => {
    when.typePokemonIndex("33");
    then(get.goButton()).shouldBeEnabled();
  });

  it("When input filled should have input value", () => {
    when.typePokemonIndex("42");
    then(get.pokemonIndexInputValue()).shouldEqual("42");
  });

  it("when typing index and submitting should call onSubmit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    then(get.onSubmitSpy()).shouldHaveBeenCalledWith("33");
  });

  it("should clear input when clicking submit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    then(get.pokemonIndexInputValue()).shouldEqual("");
  });

  it("should not update input value when typing non digits", () => {
    when.typePokemonIndex("abcd-");
    then(get.pokemonIndexInputValue()).shouldEqual("");
  });
});
