import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
import { Attributes, ReactNode } from "react";
import { IPokemonService, PokemonList } from "../../services/pokemon.service";
import { PokemonGoComponentDriver } from "../pokemon-go/pokemon-go.driver";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import { IPokemonCatalogPros, PokemonCatalog } from "./pokemon-catalog.container";
export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper({ defaultDataAttribute: "data-hook" });
  private reactComponentHelper = new CypressReactComponentHelper();
  private pokemonImageDriver: PokemonImageComponentDriver = new PokemonImageComponentDriver();
  private pokemonGoDriver: PokemonGoComponentDriver = new PokemonGoComponentDriver();

  private pokemonServiceMock = this.helper.given.stubbedInterface<IPokemonService>("IPokemonService");

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
      this.pokemonServiceMock.getPokemon.returns(value);
      this.pokemonServiceMock.getPokemonByOffset.returns(value);
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
    nextButton: () => this.helper.get.elementByTestId("next"),
    prevButton: () => this.helper.get.elementByTestId("prev"),
    mock: { pokemonService: () => this.props.service }
  };
}
