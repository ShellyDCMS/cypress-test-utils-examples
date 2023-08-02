import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { PokemonList } from "../../services/pokemon.service";
import { PokemonCatalogComponentDriver } from "./pokemon-catalog.component.driver";
import { PokemonCatalog } from "./pokemon-catalog.container";

describe("React PokemonCatalogComponent", () => {
  const chance = new Chance();

  const { when, given, get, beforeAndAfter } =
    new PokemonCatalogComponentDriver();
  beforeAndAfter();

  describe("given one of many pokemons", () => {
    const name = chance.word();

    const pokemon: PokemonList = Builder<PokemonList>()
      .results([{ name, url: "2" }])
      .count(3)
      .next(chance.url())
      .previous(chance.url())
      .build();

    beforeEach(() => {
      given.pokemon(pokemon);
      given.image.mockImageResponse("default.png");
      given.onNextSpy();
      given.onPrevSpy();
      when.render(PokemonCatalog);
      when.waitForNextToBeEnabled();
    });

    it("should show picture given pokemon provided as input", async () => {
      expect(await get.image.pictureSrc()).to.include("2.gif");
    });

    it("should render pokemon name", async () => {
      expect(await get.nameText()).to.eq(name);
    });

    it("should render pokemon count", async () => {
      expect(await get.countText()).to.eq("2 of 3");
    });

    describe("when clicking next", () => {
      beforeEach(() => {
        when.waitForNextToBeEnabled();
        when.clickNext();
      });

      it("should call onNext", () => {
        expect(get.onNextSpy().should("have.been.calledOnce"));
      });

      it("should fetch next pokemon when next is click", () => {
        expect(
          get.getPokemonSpy().should("have.been.calledWith", pokemon.next)
        );
      });
    });

    describe("when clicking prev", () => {
      beforeEach(() => {
        when.waitForPrevToBeEnabled();
        when.clickPrev();
      });

      it("should call onPrev", () => {
        expect(get.onPrevSpy().should("have.been.calledOnce"));
      });

      it("should call getPokemon with the prev pokemon's url", () => {
        expect(
          get.getPokemonSpy().should("have.been.calledWith", pokemon.previous)
        );
      });
    });
  });

  describe("given single pokemon", () => {
    const name = chance.word();
    const pokemon: PokemonList = Builder<PokemonList>()
      .results([{ name, url: "1" }])
      .count(1)
      .build();

    beforeEach(() => {
      given.pokemon(pokemon);
      given.image.mockImageResponse("default.png");
      when.render(PokemonCatalog);
    });

    it("should show picture given pokemon provided as input", async () => {
      expect(await get.image.pictureSrc()).to.include("1.gif");
    });

    it("should render pokemon count", async () => {
      expect(await get.countText()).to.eq("1 of 1");
    });

    it("next button should be disabled", async () => {
      expect(await get.isNextButtonDisabled()).to.be.true;
    });

    it("prev button should be disabled", async () => {
      expect(await get.isPrevButtonDisabled()).to.be.true;
    });
  });
});
