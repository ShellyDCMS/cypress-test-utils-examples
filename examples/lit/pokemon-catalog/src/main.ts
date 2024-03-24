import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/pokemon-catalog/pokemon-catalog.component";
import { PokemonInternalService, PokemonServiceContext } from "./services/pokemon.service";

import { ContextProvider } from "@lit-labs/context";
import styles from "./styles.scss";
@customElement("pokemon-app")
export class PokemonApp extends LitElement {
  static override styles = styles;

  public pokemonService: PokemonInternalService;

  override connectedCallback() {
    super.connectedCallback();
    new ContextProvider(this, PokemonServiceContext, {
      getPokemonService: () => {
        if (!this.pokemonService) {
          this.pokemonService = new PokemonInternalService();
        }
        return () => this.pokemonService;
      }
    });
  }
  protected override render() {
    return html`<div class="app"><pokemon-catalog></pokemon-catalog></div> `;
  }
}
