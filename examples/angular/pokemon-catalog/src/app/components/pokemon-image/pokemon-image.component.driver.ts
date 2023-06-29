import type { Type } from "@angular/core";
import { CypressHelper } from "@def/test-utils";
import { CypressAngularComponentHelper } from "@def/test-utils/angular";
import { MountConfig } from "cypress/angular";
import type { PokemonImageComponent } from "./pokemon-image.component";

export class PokemonImageComponentDriver {
  private helper = new CypressHelper();
  private angularComponentHelper =
    new CypressAngularComponentHelper<PokemonImageComponent>();

  private componentProperties: Partial<PokemonImageComponent> = {};

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    pokemonIndex: (value: number) =>
      (this.componentProperties.pokemonIndex = value),
    mockImageResponse: () =>
      this.helper.given.interceptAndMockResponse({
        url: "**/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/**",
        response: { fixture: "default.png" }
      }),
    missingImage: () =>
      this.helper.given.interceptAndMockResponse({
        url: "**/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/**",
        response: { headers: 404 }
      })
  };

  when = {
    ...this.helper.when,
    render: (
      type: Type<PokemonImageComponent>,
      config: MountConfig<PokemonImageComponent>
    ) => {
      this.angularComponentHelper.when.mount(type, config, {
        ...this.componentProperties
      });
    }
  };

  get = {
    ...this.helper.get,
    pokemonImage: () => this.helper.get.elementByTestId("pokemon-image"),
    fallBackImage: () =>
      this.helper.get.elementByTestId("pokemon-fallback-image"),
    pictureSrc: () => this.helper.get.elementsAttribute("pokemon-image", "src"),
    fallbackPictureSrc: () =>
      this.helper.get.elementsAttribute("pokemon-fallback-image", "src")
  };
}
