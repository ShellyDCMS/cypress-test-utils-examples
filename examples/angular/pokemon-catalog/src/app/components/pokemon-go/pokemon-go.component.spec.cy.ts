import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("Angular PokemonGoComponent Tests", () => {
  const testConfig = {
    declarations: [PokemonGoComponent]
  };

  const { when, get, beforeAndAfter } =
    new PokemonGoComponentDriver();
  beforeAndAfter();

  it("When input filled should have input value", async () => {
    when.render(PokemonGoComponent, testConfig);
    when.typePokemonIndex("42");
    expect(await get.selectedPokemon()).to.eq("42");
  });

  it("When input and clicked go should get event value", () => {
    when.render(PokemonGoComponent, testConfig);
    when.typePokemonIndex("12");
    when.clickGo();
    expect(get.selectedPokemonSpy().should("have.been.called"));
  });
});