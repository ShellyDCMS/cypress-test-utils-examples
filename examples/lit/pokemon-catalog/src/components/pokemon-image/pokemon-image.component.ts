import { LitElement, PropertyValues, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./pokemon-image.component.scss";

@customElement("pokemon-image")
export class PokemonImageComponent extends LitElement {
  @property({ type: Number })
  pokemonIndex!: number;

  @state()
  showFallbackImage = false;

  static override get styles() {
    return styles;
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("pokemonIndex")) {
      this.showFallbackImage = false;
    }
  }

  onImageError = event => {
    this.showFallbackImage = true;
  };

  getPokemonImage = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokemonIndex}.gif`;

  getFallbackImage = () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIndex}.png`;

  protected override render() {
    return html`
      <div>
        ${this.showFallbackImage
          ? html` <img
              data-cy="pokemon-fallback-image"
              src="${this.getFallbackImage()}"
              class="pokemon-fallback"
              alt="pokemon"
            />`
          : html`<img
              data-cy="pokemon-image"
              src="${this.getPokemonImage()}"
              class="pokemon"
              alt="pokemon"
              @error="${this.onImageError}"
            />`}
      </div>
    `;
  }
}
