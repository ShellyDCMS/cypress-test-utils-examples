import { Builder } from "builder-pattern";
import { Chance } from "chance";
import React from "react";
import {
  PokemonCatalogComponent,
  PokemonList
} from "./pokemon-catalog.component";
import { PokemonCatalogComponentDriver } from "./pokemon-catalog.component.driver";

describe("React PokemonCatalogComponent", () => {
  const chance = new Chance();

  const { when, given, get, beforeAndAfter } =
    new PokemonCatalogComponentDriver();
  beforeAndAfter();

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
      given.onNextSpy();
      given.onPrevSpy();
      when.render(
        PokemonCatalogComponent,
        {},
        React.createElement("input", {
          type: "text",
          value: "And here is a child"
        })
      );
      when.wait(200);
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

    it("should emit onNext when next is click", () => {
      when.clickNext();
      expect(get.onNextSpy().should("have.been.calledOnce"));
    });

    it("should emit onPrev when prev is click", () => {
      when.clickPrev();
      expect(get.onPrevSpy().should("have.been.calledOnce"));
    });
  });

  describe("single pokemon", () => {
    const name = chance.word();
    const pokemon: PokemonList = Builder<PokemonList>()
      .results([{ name, url: "1" }])
      .count(1)
      .build();

    beforeEach(() => {
      given.pokemon(pokemon);
      when.render(PokemonCatalogComponent);
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
