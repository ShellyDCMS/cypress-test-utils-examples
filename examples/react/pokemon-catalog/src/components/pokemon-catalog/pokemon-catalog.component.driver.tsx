import { CypressHelper } from "dell-cypress-test-utils";
import { CypressReactComponentHelper } from "dell-cypress-test-utils/react";
import type { Attributes, ReactNode } from "react";
import { PokemonImageComponentDriver } from "../pokemon-image/pokemon-image.component.driver";
import {
  IProps,
  PokemonCatalogComponent,
  PokemonList
} from "./pokemon-catalog.component";

export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper();
  private reactComponentHelper = new CypressReactComponentHelper();
  private pokemonImageDriver: PokemonImageComponentDriver =
    new PokemonImageComponentDriver();

  private props: IProps = {
    onNext: () => {},
    onPrev: () => {},
    pokemon: {
      count: 0,
      results: [],
      next: null,
      previous: null
    }
  };

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    image: { ...this.pokemonImageDriver.given },
    pokemon: (value: PokemonList) => (this.props.pokemon = value),
    onNextSpy: () => (this.props.onNext = this.helper.given.spy("onNext")),
    onPrevSpy: () => (this.props.onPrev = this.helper.given.spy("onPrev"))
  };

  when = {
    ...this.helper.when,
    image: { ...this.pokemonImageDriver.when },
    render: (
      type: typeof PokemonCatalogComponent,
      props?: (Attributes & Partial<IProps>) | null,
      ...children: ReactNode[]
    ) => {
      const mergedProps: Attributes & IProps = { ...this.props, ...props };
      this.reactComponentHelper.when.mount(type, mergedProps, children);
    },
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
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev")
  };
}
