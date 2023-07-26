import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
import { Attributes, ReactNode } from "react";
import { PokemonList, PokemonService } from "../../services/pokemon.service";
import { PokemonGoComponentDriver } from "../pokemon-go/pokemon-go.driver";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import {
  IPokemonCatalogPros,
  PokemonCatalog
} from "./pokemon-catalog.container";
export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper();
  private reactComponentHelper = new CypressReactComponentHelper();
  private pokemonImageDriver: PokemonImageComponentDriver =
    new PokemonImageComponentDriver();
  private pokemonGoDriver: PokemonGoComponentDriver =
    new PokemonGoComponentDriver();

  // @ts-ignore
  private getPokemonStub: Cypress.Agent<sinon.SinonStub<any[], any>>;
  private pokemonServiceMock: PokemonService = new PokemonService();

  private props: IPokemonCatalogPros = {
    onNext: () => {},
    onPrev: () => {},
    service: new PokemonService()
  };

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    image: this.pokemonImageDriver.given,
    pokemonGo: this.pokemonGoDriver.given,
    onNextSpy: () => (this.props.onNext = this.helper.given.spy("onNext")),
    onPrevSpy: () => (this.props.onPrev = this.helper.given.spy("onPrev")),
    pokemon: (value: PokemonList) => {
      this.getPokemonStub = this.helper.given.stub();
      this.props.service!.getPokemon = this.getPokemonStub;
      this.getPokemonStub.callsFake(() => {
        return value;
      });
    },
    getPokemonSpy: () =>
      this.helper.given.spyOnObject(this.pokemonServiceMock, "getPokemon")
  };

  when = {
    image: this.pokemonImageDriver.when,
    pokemonGo: this.pokemonGoDriver.when,
    render: (
      type: typeof PokemonCatalog,
      props?: (Attributes & Partial<IPokemonCatalogPros>) | null,
      ...children: ReactNode[]
    ) => {
      const mergedProps: Attributes & IPokemonCatalogPros = {
        ...props,
        ...this.props
      };
      this.reactComponentHelper.when.mount(type, mergedProps, children);
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
    image: this.pokemonImageDriver.get,
    pokemonGo: this.pokemonGoDriver.get,
    onNextSpy: () => this.helper.get.spy("onNext"),
    onPrevSpy: () => this.helper.get.spy("onPrev"),
    countText: () => this.helper.get.elementsText("count"),
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    isNextButtonDisabled: () => this.helper.get.isElementDisabled("next"),
    isGoButtonDisabled: () => this.helper.get.isElementDisabled("go"),
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev"),
    getPokemonSpy: () => this.getPokemonStub,
    pokemonServiceMock: () => this.props.service
  };
}
