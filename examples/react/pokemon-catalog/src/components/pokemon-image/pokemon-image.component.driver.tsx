import { CypressHelper } from "@def/test-utils";
import { CypressReactComponentHelper } from "@def/test-utils/react";
import type { Attributes, ReactNode } from "react";
import { IProps, PokemonImageComponent } from "./pokemon-image.component";

export class PokemonImageComponentDriver {
  private helper = new CypressHelper();
  private reactComponentHelper = new CypressReactComponentHelper();

  private props: IProps = {
    pokemonIndex: 0
  };

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    pokemonIndex: (value: number) => (this.props.pokemonIndex = value),
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
      type: typeof PokemonImageComponent,
      props?: (Attributes & Partial<IProps>) | null,
      ...children: ReactNode[]
    ) => {
      const mergedProps: Attributes & IProps = { ...this.props, ...props };
      this.reactComponentHelper.when.mount(type, mergedProps, children);
    }
  };

  get = {
    ...this.helper.get,
    pictureSrc: () => this.helper.get.elementsAttribute("pokemon-image", "src"),
    pokemonImage: () => this.helper.get.elementByTestId("pokemon-image"),
    fallBackImage: () =>
      this.helper.get.elementByTestId("pokemon-fallback-image"),
    fallbackPictureSrc: () =>
      this.helper.get.elementsAttribute("pokemon-fallback-image", "src")
  };
}
