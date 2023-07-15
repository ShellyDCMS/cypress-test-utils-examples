import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("pokemon-go")
export class PokemonGoComponent extends LitElement {
  static override styles = css`
    .go {
      padding-top: 10px;
    }
    input[type="text"] {
      padding: 5px;
      margin-right: 10px;
    }
  `;

  @state()
  inputValue = "";

  @property()
  onSubmit!: (index: string) => void;

  handleInputChange = event =>
    (this.inputValue = event.target.value.replace(/[^0-9]/g, ""));

  handleKeyDown = event => {
    // Allow only numeric characters, backspace, and delete
    if (
      event.key &&
      !/[\d\\b]|Delete/i.test(event.key) &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight" &&
      event.key !== "Enter"
    ) {
      event.preventDefault();
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.onSubmit(this.inputValue);
    this.inputValue = "";
  };

  override render() {
    return html`
      <form class="go" @submit=${this.handleFormSubmit}>
        <input
          type="text"
          .value=${this.inputValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          placeholder="Pokemon"
        />
        <button type="submit" .disabled=${this.inputValue === ""}>Go</button>
      </form>
    `;
  }
}
