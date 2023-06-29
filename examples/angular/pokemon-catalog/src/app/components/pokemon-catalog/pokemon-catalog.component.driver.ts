import type { Type } from "@angular/core";
import { CypressHelper } from "@def/test-utils";
import { CypressAngularComponentHelper } from "@def/test-utils/angular";
import { MountConfig } from "cypress/angular";
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

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    image: { ...this.pokemonImageDriver.given },
    pokemon: (value: PokemonList) => (this.componentProperties.pokemon = value)
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
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev")
  };
}
