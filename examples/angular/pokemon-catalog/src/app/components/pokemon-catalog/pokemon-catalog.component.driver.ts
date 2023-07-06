import type { Type } from "@angular/core";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressAngularComponentHelper } from "@shellygo/cypress-test-utils/angular";
import { MountConfig } from "cypress/angular";
import { PokemonList, PokemonService } from "src/app/services/pokemon.service";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import type { PokemonCatalogComponent } from "./pokemon-catalog.component";
import { PokemonGoComponentDriver } from "../pokemon-go/pokemon-go.component.driver";

export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper();
  private angularComponentHelper =
    new CypressAngularComponentHelper<PokemonCatalogComponent>();

  private pokemonImageDriver: PokemonImageComponentDriver =
    new PokemonImageComponentDriver();

  private pokemonGoDriver: PokemonGoComponentDriver =
    new PokemonGoComponentDriver();

  private componentProperties: Partial<PokemonCatalogComponent> = {};
  // @ts-ignore
  private getPokemonStub: Cypress.Agent<sinon.SinonStub<any[], any>>;
  private pokemonServiceMock: PokemonService = new PokemonService();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    pokemonGo: this.pokemonGoDriver.given,
    image: this.pokemonImageDriver.given,
    pokemon: (value: PokemonList) => {
      this.getPokemonStub = this.helper.given.stub();
      this.pokemonServiceMock.getPokemon = this.getPokemonStub;
      this.getPokemonStub.callsFake(() => {
        return value;
      });
    },
    getPokemonSpy: () =>
      this.helper.given.spyOnObject(this.pokemonServiceMock, "getPokemon")
  };

  when = {
    pokemonGo: this.pokemonGoDriver.when,
    image: this.pokemonImageDriver.when,
    render: (
      type: Type<PokemonCatalogComponent>,
      config: MountConfig<PokemonCatalogComponent>
    ) => {
      this.angularComponentHelper.when.mount(type, config, {
        ...this.componentProperties
      });
    },
    waitForNextToBeEnabled: () =>
      this.helper.when.waitUntil(() =>
        this.helper.get.elementByTestId("next").should("be.enabled")
      ),
    waitForPrevToBeEnabled: () =>
      this.helper.when.waitUntil(() =>
        this.helper.get.elementByTestId("prev").should("be.enabled")
      ),
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    pokemonGo: this.pokemonGoDriver.get,
    image: this.pokemonImageDriver.get,
    onNextSpy: () => this.helper.get.spy("onNext"),
    onPrevSpy: () => this.helper.get.spy("onPrev"),
    countText: () => this.helper.get.elementsText("count"),
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    isNextButtonDisabled: () => this.helper.get.isElementDisabled("next"),
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev"),
    getPokemonSpy: () => this.getPokemonStub,
    pokemonServiceMock: () => this.pokemonServiceMock
  };
}
