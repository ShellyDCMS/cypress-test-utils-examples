import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressLitComponentHelper } from "@shellygo/cypress-test-utils/lit";
import { html } from "lit";
import { PokemonImageComponent } from "./pokemon-image.component";

export class PokemonImageComponentDriver {
  private helper = new CypressHelper();
  private litComponentHelper = new CypressLitComponentHelper();
  private props = {
    pokemonIndex: 0
  };
  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {
    pokemonIndex: (value: number) => {
      this.props.pokemonIndex = value;
    },
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
    render: (element: PokemonImageComponent) => {
      this.litComponentHelper.when.mount(
        element,
        html`<pokemon-image pokemonIndex="${this.props.pokemonIndex}"></pokemon-image>`
      );
    }
  };

  get = {
    pokemonImage: () => this.helper.get.elementByTestId("pokemon-image"),
    fallBackImage: () => this.helper.get.elementByTestId("pokemon-fallback-image"),
    pictureSrc: () => this.helper.get.elementsAttribute("pokemon-image", "src"),
    fallbackPictureSrc: () => this.helper.get.elementsAttribute("pokemon-fallback-image", "src")
  };
}
