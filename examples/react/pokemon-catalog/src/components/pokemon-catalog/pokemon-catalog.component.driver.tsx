import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
import { Attributes, ReactNode } from "react";
import { IPokemonService, PokemonList } from "../../services/pokemon.service";
import { PokemonGoComponentDriver } from "../pokemon-go/pokemon-go.driver";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import { IPokemonCatalogPros, PokemonCatalog } from "./pokemon-catalog.container";
export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper();
  private reactComponentHelper = new CypressReactComponentHelper();
  private pokemonImageDriver: PokemonImageComponentDriver = new PokemonImageComponentDriver();
  private pokemonGoDriver: PokemonGoComponentDriver = new PokemonGoComponentDriver();

  private pokemonServiceMock: IPokemonService = {
    getPokemon: url => Promise.reject(),
    getPokemonByOffset: offset => Promise.reject()
  };

  private props: IPokemonCatalogPros = {
    onNext: () => {},
    onPrev: () => {},
    service: this.pokemonServiceMock
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
      this.helper.when.waitUntil(() => this.helper.get.elementByTestId("next").should("be.enabled")),
    waitForPrevToBeEnabled: () =>
      this.helper.when.waitUntil(() => this.helper.get.elementByTestId("prev").should("be.enabled")),
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
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev"),
    getPokemonSpy: () => this.helper.get.spyFromFunction(this.pokemonServiceMock.getPokemon!),
    getPokemonByOffsetSpy: () => this.helper.get.spyFromFunction(this.pokemonServiceMock.getPokemonByOffset!),
    pokemonServiceMock: () => this.props.service
  };
}
