import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
import { Attributes, ReactNode } from "react";
import { PokemonList, PokemonService } from "../../services/pokemon.service";
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

  // @ts-ignore
  private getPokemonStub: Cypress.Agent<sinon.SinonStub<any[], any>>;
  private pokemonServiceMock: PokemonService = new PokemonService();

  private props: IPokemonCatalogPros = {
    onNext: () => {},
    onPrev: () => {},
    service: new PokemonService()
  };

  // private mount = (
  //   type: typeof PokemonServiceProvider,
  //   props: Attributes & IServiceProviderPros,
  //   ...children: ReactNode[]
  // ) => {
  //   this.reactComponentHelper.when.mount(type, props, children);
  // };

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    image: { ...this.pokemonImageDriver.given },
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
    ...this.helper.when,
    image: { ...this.pokemonImageDriver.when },
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
    pokemonServiceMock: () => this.props.service
  };
}
