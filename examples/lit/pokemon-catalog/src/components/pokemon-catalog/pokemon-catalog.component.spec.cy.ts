import { PokemonList } from "@services/pokemon.service";
import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { PokemonCatalogComponent } from "./pokemon-catalog.component";
import { PokemonCatalogComponentDriver } from "./pokemon-catalog.component.driver";

describe("Lit PokemonCatalogComponent", () => {
  const chance = new Chance();
  const { when, given, get, beforeAndAfter } =
    new PokemonCatalogComponentDriver();
  beforeAndAfter();

  describe("single pokemon", () => {
    const name = chance.word();
    const pokemon: PokemonList = Builder<PokemonList>()
      .results([{ name, url: "1" }])
      .count(1)
      .build();

    beforeEach(() => {
      given.pokemon(pokemon);
      given.image.mockImageResponse("default.png");
      when.render(new PokemonCatalogComponent());
    });

    it("should show picture given pokemon provided as input", async () => {
      when.render(new PokemonCatalogComponent());
      expect(await get.image.pictureSrc()).to.include("1.gif");
    });

    it("should render pokemon count", async () => {
      expect(await get.countText()).to.include("1 of 1\n");
    });

    it("next button should be disabled", async () => {
      expect(await get.isNextButtonDisabled()).to.be.true;
    });

    it("prev button should be disabled", async () => {
      expect(await get.isPrevButtonDisabled()).to.be.true;
    });
  });

  describe("when one of many pokemons", () => {
    const name = chance.word();

    const pokemon: PokemonList = Builder<PokemonList>()
      .results([{ name, url: "2" }])
      .count(3)
      .next(chance.url())
      .previous(chance.url())
      .build();

    beforeEach(() => {
      given.pokemon(pokemon);
      when.render(new PokemonCatalogComponent());
    });

    it("should show picture given pokemon provided as input", async () => {
      when.render(new PokemonCatalogComponent());
      expect(await get.image.pictureSrc()).to.include("2.gif");
    });

    it("should render pokemon name", async () => {
      expect(await get.nameText()).to.eq(name);
    });

    it("should render pokemon count", async () => {
      given.pokemon(pokemon);
      when.render(new PokemonCatalogComponent());
      expect(await get.countText()).to.include("2 of 3\n");
    });

    describe("when clicking prev", () => {
      beforeEach(() => {
        when.clickPrev();
      });
      it("should call getPokemon with the prev pokemon's url", () => {
        expect(get.getPokemonSpy()).to.have.been.calledWith(pokemon.previous);
      });
    });

    describe("when clicking next", () => {
      beforeEach(() => {
        when.clickNext();
      });
      it("should call getPokemon with the next pokemon's url", () => {
        expect(get.getPokemonSpy()).to.have.been.calledWith(pokemon.next);
      });
    });
  });
});
