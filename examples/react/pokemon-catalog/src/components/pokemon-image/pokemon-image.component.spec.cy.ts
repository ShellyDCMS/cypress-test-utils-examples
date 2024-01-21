import { then } from "@shellygo/cypress-test-utils/assertable";
import { Chance } from "chance";
import { PokemonImageComponent } from "./pokemon-image.component";
import { PokemonImageComponentDriver } from "./pokemon-image.component.driver";

describe("PokemonImageComponent Tests", () => {
  const chance = new Chance();

  let { when, given, get, beforeAndAfter } = new PokemonImageComponentDriver();
  beforeAndAfter();

  beforeEach(() => {
    ({ when, given, get } = new PokemonImageComponentDriver());
  });

  it("given valid pokemon index should show gif", () => {
    const pokemonIndex: number = chance.integer({ min: 1, max: 500 });
    given.pokemonIndex(pokemonIndex);
    given.mockImageResponse("default.png");
    when.render(PokemonImageComponent);
    then(get.pictureSrc()).shouldEndWith(`/${pokemonIndex}.gif`);
  });

  it("given image not found should show fallback image", () => {
    const pokemonIndex: number = chance.integer({ min: 501, max: 1000 });
    given.pokemonIndex(pokemonIndex);
    given.missingImage();
    when.render(PokemonImageComponent);
    then(get.fallBackImage()).shouldExist();
  });

  it("given image not found should show correct fallback image", () => {
    const pokemonIndex: number = chance.integer({ min: 501, max: 1000 });
    given.pokemonIndex(pokemonIndex);
    given.missingImage();
    when.render(PokemonImageComponent);
    then(get.fallbackPictureSrc()).shouldEndWith(`/${pokemonIndex}.png`);
  });
});
