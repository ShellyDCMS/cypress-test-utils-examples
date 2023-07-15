import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./pokemon-go.component.scss";

@customElement("pokemon-go")
export class PokemonGoComponent extends LitElement {
  static override get styles() {
    return styles;
  }

  @state()
  inputValue = "";

  @property()
  onSubmit!: (index: string) => void;

  handleInputChange = (event: InputEvent) =>
    (this.inputValue = (event.target as HTMLInputElement).value);

  handleKeyDown = (event: KeyboardEvent) => {
    if (
      !event.ctrlKey &&
      ![
        "Delete",
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
        "Control"
      ].includes(event.key) &&
      /[^0-9]/g.test(event.key)
    ) {
      event.preventDefault();
    }
  };

  handleFormSubmit = (event: Event) => {
    event.preventDefault();
    this.onSubmit(this.inputValue);
    this.inputValue = "";
  };

  override render() {
    return html`
      <form class="go" @submit=${this.handleFormSubmit}>
        <input
          data-cy="pokemon-index"
          type="text"
          .value=${this.inputValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          placeholder="Pokemon"
        />
        <button type="submit" .disabled=${this.inputValue === ""} data-cy="go">
          Go
        </button>
      </form>
    `;
  }
}
