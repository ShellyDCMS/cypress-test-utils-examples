import { PokemonGoComponent } from "@components/pokemon-go/pokemon-go.component";
import { PokemonList, PokemonService } from "@services/pokemon.service";
import { then } from "@shellygo/cypress-test-utils";
import { Builder } from "builder-pattern";
import { Chance } from "chance";
import { PokemonImageComponent } from "../pokemon-image/pokemon-image.component";
import { PokemonCatalog } from "./pokemon-catalog.component";
import { PokemonCatalogComponentDriver } from "./pokemon-catalog.component.driver";

describe("PokemonCatalogComponent Tests", () => {
  const chance = new Chance();
  const { when, given, get, beforeAndAfter } = new PokemonCatalogComponentDriver();

  const testConfig = {
    declarations: [PokemonCatalog, PokemonImageComponent, PokemonGoComponent],
    providers: [
      {
        provide: PokemonService,
        useValue: get.pokemonServiceMock()
      }
    ]
  };

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
      when.render(PokemonCatalog, testConfig);
    });

    it("should show picture given pokemon provided as input", () => {
      then(get.image.pictureSrc()).shouldEndWith("/2.gif");
    });

    it("should render pokemon name", () => {
      then(get.nameText()).shouldEqual(name);
    });

    it("should render pokemon count", () => {
      then(get.countText()).shouldEqual("2 of 3");
    });
    describe("when clicking next", () => {
      beforeEach(() => {
        when.clickNext();
      });

      it("should emit onNext", () => {
        then(get.onNextSpy()).shouldHaveBeenCalledOnce();
      });

      it("should call getPokemon with the next pokemon's url", () => {
        then(get.getPokemonSpy()).shouldHaveBeenCalledWith(pokemon.next);
      });
    });

    describe("when clicking prev", () => {
      beforeEach(() => {
        when.clickPrev();
      });

      it("should emit onPrev", () => {
        then(get.onPrevSpy()).shouldHaveBeenCalledOnce();
      });

      it("should call getPokemon with the prev pokemon's url", () => {
        then(get.getPokemonSpy()).shouldHaveBeenCalledWith(pokemon.previous);
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
      when.render(PokemonCatalog, testConfig);
    });

    it("should show picture given pokemon provided as input", () => {
      then(get.image.pictureSrc()).shouldEndWith("/1.gif");
    });

    it("should render pokemon count", () => {
      then(get.countText()).shouldEqual("1 of 1");
    });

    it("next button should be disabled", () => {
      then(get.nextButton()).shouldBeDisabled();
    });

    it("prev button should be disabled", () => {
      then(get.prevButton()).shouldBeDisabled();
    });
  });
});
