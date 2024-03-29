import { provide } from "@lit/context";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/pokemon-catalog/pokemon-catalog.component";
import "./components/pokemon/pokemon.component";

import { pokemonServiceContext } from "@services/pokemon.service";
import { styleMap } from "lit/directives/style-map.js";
import styles from "./styles.scss";

@customElement("pokemon-app")
export class PokemonApp extends LitElement {
  static override styles = styles;

  @provide({ context: pokemonServiceContext })
  protected override render() {
    return html`<div class="app">
      <pokemon-component style=${styleMap({ "align-self": "center" })}></pokemon-component>
    </div> `;
  }
}
