import type { Type } from "@angular/core";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressAngularComponentHelper } from "@shellygo/cypress-test-utils/angular";
import { MountConfig } from "cypress/angular";
import { PokemonList, PokemonService } from "src/app/services/pokemon.service";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import type { PokemonCatalog } from "./pokemon-catalog.component";

export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper({ defaultDataAttribute: "data-hook" });
  private angularComponentHelper = new CypressAngularComponentHelper<PokemonCatalog>();
  private pokemonImageDriver: PokemonImageComponentDriver = new PokemonImageComponentDriver();

  private componentProperties: Partial<PokemonCatalog> = {};
  private pokemonServiceMock: Partial<PokemonService> = {
    getPokemon: url => Promise.reject(),
    getPokemonByOffset: offset => Promise.reject()
  };

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    image: this.pokemonImageDriver.given,
    pokemon: (value: PokemonList) => {
      this.pokemonServiceMock.getPokemon = this.helper.given
        .stub()
        .as(this.pokemonServiceMock.getPokemon!.name)
        .returns(value);

      this.pokemonServiceMock.getPokemonByOffset = this.helper.given
        .stub()
        .as(this.pokemonServiceMock.getPokemonByOffset!.name)
        .returns(value);
    }
  };

  when = {
    image: this.pokemonImageDriver.when,
    render: (type: Type<PokemonCatalog>, config: MountConfig<PokemonCatalog>) => {
      this.angularComponentHelper.when.mount(type, config, {
        ...this.componentProperties
      });
    },
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    image: this.pokemonImageDriver.get,
    onNextSpy: () => this.helper.get.spy("onNext"),
    onPrevSpy: () => this.helper.get.spy("onPrev"),
    countText: () => this.helper.get.elementsText("count"),
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    nextButton: () => this.helper.get.elementByTestId("next"),
    prevButton: () => this.helper.get.elementByTestId("prev"),
    getPokemonSpy: () => this.helper.get.spyFromFunction(this.pokemonServiceMock.getPokemon!),
    getPokemonByOffsetSpy: () => this.helper.get.spyFromFunction(this.pokemonServiceMock.getPokemonByOffset!),
    pokemonServiceMock: () => this.pokemonServiceMock
  };
}
