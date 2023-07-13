import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('pokemon-go')
export class PokemonGoComponent extends LitElement {
  static override styles = css`
    .go {
      padding-top: 10px;
    }
    input[type='text'] {
      padding: 5px;
      margin-right: 10px;
    }
  `;

  @state()
  inputValue = '';

  handleInputChange(event) {
    const numericValue = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    this.inputValue = numericValue;
  }

  handleKeyDown(event) {
    // Allow only numeric characters, backspace, and delete
    if (
      event.key &&
      !/[\d\\b]|Delete/i.test(event.key) &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight'
    ) {
      event.preventDefault();
    }
  }

  handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    if (this.inputValue !== '') {
      const inputEvent = new CustomEvent('input-number-event', { detail: this.inputValue });
      this.dispatchEvent(inputEvent);
      this.inputValue = ''
    }
  }

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
      <button type="submit">Go</button>
    </form>
    `;
  }
}