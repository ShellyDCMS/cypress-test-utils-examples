import { PokemonImageComponent } from "@components/pokemon-image/pokemon-image.component";
import { ContextConsumer } from "@lit-labs/context";
import {
  PokemonInternalService,
  PokemonList,
  PokemonServiceContext
} from "@services/pokemon.service";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import styles from "./pokemon-catalog.component.scss";

// customElements.define("pokemon-kuku", PokemonImageComponent);
@customElement("pokemon-catalog")
export class PokemonCatalogComponent extends LitElement {
  @state()
  pokemon!: PokemonList;

  @state()
  pokemonService!: PokemonInternalService;

  static override get styles() {
    return styles;
  }
  constructor() {
    super();
    const image = new PokemonImageComponent(); // TODO: find out how to remove this
  }

  override connectedCallback() {
    super.connectedCallback();
    new ContextConsumer(
      this,
      PokemonServiceContext,
      context => {
        this.pokemonService = context.pokemonService();
      },
      true
    );
    if (this.pokemonService.getPokemon) this.loadPokemon();
  }

  isNextDisabled = () => !this.pokemon.next || !this.pokemonService;
  isPrevDisabled = () => !this.pokemon.previous || !this.pokemonService;

  loadPokemon = async () =>
    (this.pokemon = await this.pokemonService.getPokemon());

  loadNext = async () =>
    (this.pokemon = await this.pokemonService.getPokemon(this.pokemon.next));

  loadPrev = async () =>
    (this.pokemon = await this.pokemonService.getPokemon(
      this.pokemon.previous
    ));

  getPokemonIndex = () =>
    Number(
      this.pokemon?.results[0].url
        .split("/")
        .filter(element => element)
        .pop()
    );
  getPokemonName = () => this.pokemon?.results[0].name;

  protected override render() {
    return !this.pokemon
      ? ""
      : html`
          <div class="catalog">
            <h2 data-cy="pokemon-name">${this.pokemon.results[0].name}</h2>
            <pokemon-image
              pokemonIndex="${this.getPokemonIndex()}"
            ></pokemon-image>
            <p data-cy="count">
              ${this.getPokemonIndex()} of ${this.pokemon.count}
            </p>
            <div>
              <button
                data-cy="prev"
                @click="${this.loadPrev}"
                .disabled="${this.isPrevDisabled()}"
              >
                Prev
              </button>
              <button
                data-cy="next"
                @click="${this.loadNext}"
                .disabled="${this.isNextDisabled()}"
              >
                Next
              </button>
            </div>
          </div>
        `;
  }
}
