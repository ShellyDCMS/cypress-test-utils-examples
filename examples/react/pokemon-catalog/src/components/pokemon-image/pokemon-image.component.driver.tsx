import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
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
    pokemonIndex: (value: number) => (this.props.pokemonIndex = value),
    mockImageResponse: (fileName: string) =>
      this.helper.given.interceptAndMockResponse({
        url: "**/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/**",
        response: { fixture: fileName }
      }),
    missingImage: () =>
      this.helper.given.interceptAndMockResponse({
        url: "**/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/**",
        response: { headers: 404 }
      })
  };

  when = {
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
    pictureSrc: () => this.helper.get.elementsAttribute("pokemon-image", "src"),
    pokemonImage: () => this.helper.get.elementByTestId("pokemon-image"),
    fallBackImage: () =>
      this.helper.get.elementByTestId("pokemon-fallback-image"),
    fallbackPictureSrc: () =>
      this.helper.get.elementsAttribute("pokemon-fallback-image", "src")
  };
}
