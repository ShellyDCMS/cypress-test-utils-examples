import { Chance } from "chance";
import { PokemonImageComponent } from "./pokemon-image.component";
import { PokemonImageComponentDriver } from "./pokemon-image.component.driver";

describe("React PokemonImageComponent Tests", () => {
  const chance = new Chance();

  const { when, given, get, beforeAndAfter } =
    new PokemonImageComponentDriver();
  beforeAndAfter();

  it("given valid pokemon index should show picture", async () => {
    const pokemonIndex: number = chance.integer({ min: 1, max: 500 });
    given.pokemonIndex(pokemonIndex);
    given.mockImageResponse();
    when.render(PokemonImageComponent);
    expect(await get.pictureSrc()).to.include(`${pokemonIndex}.gif`);
  });

  it("given image not found should show fallback image", () => {
    const pokemonIndex: number = chance.integer({ min: 501, max: 1000 });
    given.pokemonIndex(pokemonIndex);
    given.missingImage();
    when.render(PokemonImageComponent);
    expect(get.fallBackImage()).to.exist;
  });
});
