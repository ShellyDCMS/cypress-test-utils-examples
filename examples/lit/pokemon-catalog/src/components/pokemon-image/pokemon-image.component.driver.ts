import { CypressHelper } from "@def/test-utils";
import { CypressLitComponentHelper } from "@def/test-utils/lit";
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
    ...this.helper.given,
    pokemonIndex: (value: number) => {
      this.props.pokemonIndex = value;
    },
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
    render: (element: PokemonImageComponent) => {
      this.litComponentHelper.when.mount(
        element,
        html`<pokemon-image pokemonIndex="${this.props.pokemonIndex}"
          >shelly</pokemon-image
        >`
      );
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
