import type { Type } from "@angular/core";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressAngularComponentHelper } from "@shellygo/cypress-test-utils/angular";
import { MountConfig } from "cypress/angular";
import { PokemonGoComponent } from "./pokemon-go.component";
import { Subscription } from "rxjs";

export class PokemonGoComponentDriver {
  private helper = new CypressHelper();
  private angularComponentHelper =
    new CypressAngularComponentHelper<PokemonGoComponent>();

  private componentProperties: Partial<PokemonGoComponent> = {};

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {

  }

  when = {
    render: (
      type: Type<PokemonGoComponent>,
      config: MountConfig<PokemonGoComponent>
    ) => {
      this.angularComponentHelper.when.mount(type, config, {
        ...this.componentProperties
      });
    },
    typePokemonIndex: (value: string) => this.helper.when.type("search-input", value),
    clickGo: () => this.helper.when.click("go")
  };

  get = {
    selectedPokemon: () => this.helper.get.inputValue("search-input"),
    selectedPokemonSpy: () => this.helper.get.spy("selectedPokemon")
  };
}