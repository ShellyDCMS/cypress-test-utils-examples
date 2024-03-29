import { provide } from "@lit/context";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/pokemon-catalog/pokemon-catalog.component";
import { PokemonService, pokemonServiceContext } from "./services/pokemon.service";

import styles from "./styles.scss";
@customElement("pokemon-app")
export class PokemonApp extends LitElement {
  static override styles = styles;

  @provide({ context: pokemonServiceContext })
  pokemonService: PokemonService = new PokemonService();

  protected override render() {
    return html`<div class="app"><pokemon-catalog></pokemon-catalog></div> `;
  }
}
