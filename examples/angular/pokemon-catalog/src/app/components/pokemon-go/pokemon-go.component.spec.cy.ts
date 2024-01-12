import { FormsModule } from "@angular/forms";
import { then } from "@shellygo/cypress-test-utils/assertable";
import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("PokemonGo Component Tests", () => {
  const testConfig = {
    declarations: [PokemonGoComponent],
    imports: [FormsModule]
  };

  const { when, get, given, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  beforeEach(() => {
    when.render(PokemonGoComponent, testConfig);
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

  it("When input and clicked go should fetch pokemon by index", () => {
    when.typePokemonIndex("12");
    when.clickGo();
    then(get.selectedPokemonSpy()).shouldHaveBeenCalledWith("12");
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
