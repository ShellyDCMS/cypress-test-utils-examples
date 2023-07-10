import { FormsModule } from "@angular/forms";
import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("Angular PokemonGoComponent Tests", () => {
  const testConfig = {
    declarations: [PokemonGoComponent],
    imports: [FormsModule]
  };

  const { when, get, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  it("When input filled should have input value", async () => {
    when.render(PokemonGoComponent, testConfig);
    when.typePokemonIndex("42");
    expect(await get.selectedPokemon()).to.eq("42");
  });

  it("When input and clicked go should fetch pokemon by index", () => {
    when.render(PokemonGoComponent, testConfig);
    when.typePokemonIndex("12");
    when.clickGo();
    expect(get.selectedPokemonSpy().should("have.been.calledWith", "12"));
  });

  it("should empty input when clicking submit", async () => {
    when.render(PokemonGoComponent, testConfig);
    when.typePokemonIndex("33");
    when.clickGo();
    expect(await get.selectedPokemon()).to.eq("");
  });

  it("should not update input value when typing non digits", async () => {
    when.render(PokemonGoComponent, testConfig);
    when.typePokemonIndex("abcd-");
    expect(await get.selectedPokemon()).to.eq("");
  });
});
