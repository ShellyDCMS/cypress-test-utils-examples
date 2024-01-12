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

  it("when typing index and submitting should call onSubmit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    then(get.onSubmitSpy()).shouldHaveBeenCalledWith("33");
  });

  it("should not update input value when typing non digits", () => {
    when.typePokemonIndex("abcd-");
    then(get.pokemonIndexInputValue()).shouldEqual("");
  });
});
