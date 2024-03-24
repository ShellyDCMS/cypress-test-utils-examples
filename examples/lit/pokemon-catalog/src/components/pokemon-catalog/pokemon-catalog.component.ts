import { PokemonImageComponent } from "@components/pokemon-image/pokemon-image.component";
import { ContextConsumer } from "@lit-labs/context";
import { PokemonInternalService, PokemonList, PokemonServiceContext } from "@services/pokemon.service";
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./pokemon-catalog.component.scss";

@customElement("pokemon-catalog")
export class PokemonCatalog extends LitElement {
  @property()
  onPrev?: () => void;

  @property()
  onNext?: () => void;

  @state()
  pokemon!: PokemonList;

  @state()
  getPokemonService!: () => PokemonInternalService;

  private pokemonService;

  static override get styles() {
    return styles;
  }
  constructor() {
    super();
    new PokemonImageComponent();
  }

  override connectedCallback() {
    super.connectedCallback();

    debugger;
    new ContextConsumer(
      this,
      PokemonServiceContext,
      context => {
        debugger;
        this.pokemonService = context.getPokemonService()();
      },
      true
    );
    this.pokemonService = this.getPokemonService();
    if (this.pokemonService.getPokemon) this.loadPokemon();
  }

  isNextDisabled = () => !this.pokemon.next || !this.pokemonService;
  isPrevDisabled = () => !this.pokemon.previous || !this.pokemonService;

  loadPokemon = async () => (this.pokemon = await this.pokemonService.getPokemonByOffset());

  loadNext = async () => {
    this.onNext && this.onNext();
    this.pokemon = await this.pokemonService.getPokemon(this.pokemon.next);
  };

  loadPrev = async () => {
    this.pokemon = await this.pokemonService.getPokemon(this.pokemon.previous);
    this.onPrev && this.onPrev();
  };

  getPokemonIndex = () =>
    Number(
      this.pokemon?.results[0].url
        .split("/")
        .filter(element => element)
        .pop()
    );
  getPokemonName = () => this.pokemon?.results[0].name;
  getOffsetFromIndex = (index: string) => (Number(index) - 1).toString();

  fetchPokemonByOffset = async (index: string) => {
    const pokemon = await this.pokemonService?.getPokemonByOffset(this.getOffsetFromIndex(index));
    if (pokemon?.results.length) {
      this.pokemon = pokemon;
    } else {
      alert(`pokemon ${index} not found`);
    }
  };

  protected override render() {
    return !this.pokemon
      ? ""
      : html`
          <div class="catalog">
            <pokemon-image pokemonIndex="${this.getPokemonIndex()}"></pokemon-image>
            <h2 data-hook="pokemon-name">${this.pokemon.results[0].name}</h2>
            <p data-hook="count">${this.getPokemonIndex()} of ${this.pokemon.count}</p>
            <div>
              <button data-hook="prev" @click="${this.loadPrev}" .disabled="${this.isPrevDisabled()}">Prev</button>
              <button data-hook="next" @click="${this.loadNext}" .disabled="${this.isNextDisabled()}">Next</button>
            </div>
          </div>
        `;
  }
}
