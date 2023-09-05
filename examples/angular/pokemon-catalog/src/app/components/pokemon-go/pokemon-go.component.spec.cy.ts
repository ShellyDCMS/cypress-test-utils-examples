import { FormsModule } from "@angular/forms";
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
    expect(get.goButton().should("be.disabled"));
  });

  it("when typing index Go button should be enabled", () => {
    when.typePokemonIndex("33");
    expect(get.goButton().should("be.enabled"));
  });

  it("When input filled should have input value", () => {
    when.typePokemonIndex("42");
    expect(get.pokemonIndexInputValue().should("eq", "42"));
  });

  it("When input and clicked go should fetch pokemon by index", () => {
    when.typePokemonIndex("12");
    when.clickGo();
    expect(get.selectedPokemonSpy().should("have.been.calledWith", "12"));
  });

  it("should clear input when clicking submit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    expect(get.pokemonIndexInputValue().should("eq", ""));
  });

  it("should not update input value when typing non digits", () => {
    when.typePokemonIndex("abcd-");
    expect(get.pokemonIndexInputValue().should("eq", ""));
  });
});
