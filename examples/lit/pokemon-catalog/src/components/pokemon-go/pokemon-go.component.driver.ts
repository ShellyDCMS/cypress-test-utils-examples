import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressLitComponentHelper } from "@shellygo/cypress-test-utils/lit";
import { html } from "lit";
import { PokemonGoComponent } from "./pokemon-go.component";

export class PokemonGoComponentDriver {
  private helper = new CypressHelper();
  private litComponentHelper = new CypressLitComponentHelper();
  private props = {
    onSubmit: (pokemonIndex: string) => {}
  };
  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {
    onSubmitSpy: () => {
      this.props.onSubmit = this.helper.given.spyOnObject(
        this.props,
        "onSubmit"
      );
    }
  };

  when = {
    render: (element: PokemonGoComponent) => {
      this.litComponentHelper.when.mount(
        element,
        html`<pokemon-go onSubmit="${this.props.onSubmit}"></pokemon-go>`
      );
    },
    typePokemonIndex: (input: string) =>
      this.helper.when.type("pokemon-index", input),
    clickGo: () => this.helper.when.click("go")
  };

  get = {
    onSubmitSpy: () => this.helper.get.spy("onSubmit"),
    indexValue: () => this.helper.get.inputValue("pokemon-index")
  };
}
