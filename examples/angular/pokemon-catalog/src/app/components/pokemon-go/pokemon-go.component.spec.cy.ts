import { FormsModule } from "@angular/forms";
import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("Angular PokemonGoComponent Tests", () => {
  const testConfig = {
    declarations: [PokemonGoComponent],
    imports: [FormsModule]
  };

  const { when, get, given, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  beforeEach(() => {
    when.render(PokemonGoComponent, testConfig);
  });
  it("Go button should be disabled", async () => {
    expect(await get.isGoButtonDisabled()).to.be.true;
  });

  it("when typing index Go button should be enabled", async () => {
    when.typePokemonIndex("33");
    expect(await get.isGoButtonDisabled()).to.be.false;
  });

  it("When input filled should have input value", async () => {
    when.typePokemonIndex("42");
    expect(await get.selectedPokemon()).to.eq("42");
  });

  it("When input and clicked go should fetch pokemon by index", () => {
    when.typePokemonIndex("12");
    when.clickGo();
    expect(get.selectedPokemonSpy().should("have.been.calledWith", "12"));
  });

  it("should clear input when clicking submit", async () => {
    when.typePokemonIndex("33");
    when.clickGo();
    expect(await get.selectedPokemon()).to.eq("");
  });

  it("should not update input value when typing non digits", async () => {
    when.typePokemonIndex("abcd-");
    expect(await get.selectedPokemon()).to.eq("");
  });
});
