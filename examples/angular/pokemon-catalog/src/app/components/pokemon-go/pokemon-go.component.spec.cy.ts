import { Chance } from "chance";
import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("Angular PokemonGoComponent Tests", () => {
  const testConfig = {
    declarations: [PokemonGoComponent]
  };

  const chance = new Chance();

  const { when, given, get, beforeAndAfter } =
    new PokemonGoComponentDriver();
  beforeAndAfter();

  it("given Go clicked should emit the value", async () => {
    const pokemonIndex: number = chance.integer({ min: 1, max: 500 });
    given.pokemonInput(pokemonIndex);
    when.render(PokemonGoComponent, testConfig);
    when.clickGo()
    expect(await get.selectedPokemon()).to.eq(pokemonIndex);
  });
});