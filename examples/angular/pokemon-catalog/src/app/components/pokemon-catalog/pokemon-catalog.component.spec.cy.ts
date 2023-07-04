import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { PokemonList, PokemonService } from "src/app/services/pokemon.service";
import { PokemonImageComponent } from "../pokemon-image/pokemon-image.component";
import { PokemonCatalogComponent } from "./pokemon-catalog.component";
import { PokemonCatalogComponentDriver } from "./pokemon-catalog.component.driver";

describe("Angular PokemonCatalogComponent Tests", () => {
  const { when, given, get, beforeAndAfter } =
    new PokemonCatalogComponentDriver();

  const testConfig = {
    declarations: [PokemonCatalogComponent, PokemonImageComponent],
    providers: [
      {
        provide: PokemonService,
        useValue: get.pokemonServiceMock()
      }
    ]
  };

  const chance = new Chance();

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
      when.render(PokemonCatalogComponent, testConfig);
    });

    it("should show picture given pokemon provided as input", async () => {
      expect(await get.image.pictureSrc()).to.include("2.gif");
    });

    it("should render pokemon name", async () => {
      expect(await get.nameText()).to.eq(name);
    });

    it("should render pokemon count", async () => {
      expect(await get.countText()).to.eq(" 2 of 3 ");
    });

    it("before", () => {
      expect(true).to.be.true;
    });
    describe("when clicking prev", () => {
      beforeEach(() => {
        when.waitForPrevToBeEnabled();
        when.clickPrev();
      });

      it("should emit onPrev", () => {
        expect(get.onPrevSpy().should("have.been.calledOnce"));
      });

      it("should call getPokemon with the prev pokemon's url", () => {
        expect(get.getPokemonSpy()).to.have.been.calledWith(pokemon.previous);
      });
    });

    describe("when clicking next", () => {
      beforeEach(() => {
        when.waitForNextToBeEnabled();
        when.clickNext();
      });

      it("should emit onNext", () => {
        expect(get.onNextSpy().should("have.been.calledOnce"));
      });

      it("should fetch next pokemon when next is click", () => {
        expect(get.getPokemonSpy()).to.have.been.calledWith(pokemon.next);
      });
    });
    it("after", () => {
      expect(false).to.be.false;
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
      when.render(PokemonCatalogComponent, testConfig);
    });

    it("should show picture given pokemon provided as input", async () => {
      expect(await get.image.pictureSrc()).to.include("1.gif");
    });

    it("should render pokemon count", async () => {
      expect(await get.countText()).to.eq(" 1 of 1 ");
    });

    it("next button should be disabled", async () => {
      expect(await get.isNextButtonDisabled()).to.be.true;
    });

    it("prev button should be disabled", async () => {
      expect(await get.isPrevButtonDisabled()).to.be.true;
    });
  });
});
