import type { Type } from "@angular/core";
import { MountConfig } from "cypress/angular";
import { CypressHelper } from "dell-cypress-test-utils";
import { CypressAngularComponentHelper } from "dell-cypress-test-utils/angular";
import { PokemonService } from "src/app/services/pokemon.service";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import type {
  PokemonCatalogComponent,
  PokemonList
} from "./pokemon-catalog.component";

export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper();
  private angularComponentHelper =
    new CypressAngularComponentHelper<PokemonCatalogComponent>();

  private pokemonImageDriver: PokemonImageComponentDriver =
    new PokemonImageComponentDriver();

  private componentProperties: Partial<PokemonCatalogComponent> = {};
  // @ts-ignore
  private getPokemonStub: Cypress.Agent<sinon.SinonStub<any[], any>>;
  private pokemonServiceMock: PokemonService = new PokemonService() ; 

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    image: { ...this.pokemonImageDriver.given },
    pokemon: (value: PokemonList) => {
      this.getPokemonStub = this.helper.given.stub();
      this.pokemonServiceMock.getPokemon = this.getPokemonStub;
      this.getPokemonStub.callsFake((url : string) => {
        console.log('*****************'+url)
        return value;
      });
    },
    getPokemonSpy: () =>
      this.helper.given.spyOnObject(this.pokemonServiceMock, "getPokemon")
  };

  when = {
    ...this.helper.when,
    image: { ...this.pokemonImageDriver.when },
    render: (
      type: Type<PokemonCatalogComponent>,
      config: MountConfig<PokemonCatalogComponent>
    ) => {
      this.angularComponentHelper.when.mount(type, config, {
        ...this.componentProperties
      });
    },
    waitForNextToBeEnabled: () =>
      this.when.waitUntil(() =>
        this.get.elementByTestId("next").should("be.enabled")
      ),
    waitForPrevToBeEnabled: () =>
      this.when.waitUntil(() =>
        this.get.elementByTestId("prev").should("be.enabled")
      ),
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    ...this.helper.get,
    image: { ...this.pokemonImageDriver.get },
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
