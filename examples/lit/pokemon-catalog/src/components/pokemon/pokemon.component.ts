import { consume } from "@lit/context";
import { PokemonService, pokemonServiceContext } from "@services/pokemon.service";
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("pokemon-component")
export class Pokemon extends LitElement {
  @state()
  pokemon!: {
    next: string | null;
    previous: string | null;
    results: { name: string }[];
  };

  @state()
  pokemonIndex: number = 1;

  @consume({ context: pokemonServiceContext })
  @property({ attribute: false })
  private pokemonService?: PokemonService;

  override connectedCallback() {
    super.connectedCallback();
    this.loadPokemon();
  }

  loadPokemon = async () => (this.pokemon = await this.pokemonService?.getPokemonByOffset());

  loadNext = async () => {
    this.pokemon = await this.pokemonService?.getPokemon(this.pokemon.next);
    this.pokemonIndex += 1;
  };

  loadPrev = async () => {
    this.pokemon = await this.pokemonService?.getPokemon(this.pokemon.previous);
    this.pokemonIndex -= 1;
  };

  protected override render() {
    return !this.pokemon
      ? ""
      : html`
          <img
            data-hook="pokemon-image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIndex}.png"
          />
          <h2 data-hook="pokemon-name">${this.pokemon.results[0].name}</h2>
          <div>
            <button data-hook="prev" @click="${this.loadPrev}">Prev</button>
            <button data-hook="next" @click="${this.loadNext}">Next</button>
          </div>
        `;
  }
}
