import { PokemonImageComponentDriver } from "@components/pokemon-image/pokemon-image.component.driver";
import { ContextProvider } from "@lit-labs/context";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressLitComponentHelper } from "@shellygo/cypress-test-utils/lit";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PokemonList, PokemonService, PokemonServiceContext } from "../../services/pokemon.service";
import { PokemonCatalog } from "./pokemon-catalog.component";
@customElement("pokemon-service-provider")
export class PokemonServiceProvider extends LitElement {
  @property()
  private getPokemonService: () => PokemonService;

  override connectedCallback() {
    super.connectedCallback();
    new ContextProvider(this, PokemonServiceContext, {
      getPokemonService: () => {
        return this.getPokemonService;
      }
    });
  }
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper({ defaultDataAttribute: "data-hook" });
  private litComponentHelper = new CypressLitComponentHelper();
  private props = {
    onPrev: () => {},
    onNext: () => {}
  };

  private pokemonServiceMock = this.helper.given.stubbedInstance(PokemonService);
  private pokemonImageDriver: PokemonImageComponentDriver = new PokemonImageComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    image: this.pokemonImageDriver.given,
    pokemon: (value: PokemonList) => {
      this.pokemonServiceMock.getPokemon.returns(value);
      this.pokemonServiceMock.getPokemonByOffset.returns(value);
    },
    onNextSpy: (): Cypress.Agent<sinon.SinonSpy<any[], any>> => (this.props.onNext = this.helper.given.spy("onNext")),
    onPrevSpy: (): Cypress.Agent<sinon.SinonSpy<any[], any>> => (this.props.onPrev = this.helper.given.spy("onPrev"))
  };

  when = {
    image: this.pokemonImageDriver.when,
    render: (element: PokemonCatalog) => {
      this.litComponentHelper.when.unmount(element);
      this.litComponentHelper.when.mount(
        element,
        html`<pokemon-service-provider .getPokemonService="${() => this.pokemonServiceMock}" }
          ><pokemon-catalog
            .onPrev="${this.props.onPrev}"
            .onNext="${this.props.onNext}"
            .getPokemonService="${() => this.get.mock.pokemonService()}"
          ></pokemon-catalog
        ></pokemon-service-provider>`
      );
    },
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    image: this.pokemonImageDriver.get,
    onNextSpy: () => this.helper.get.spy("onNext"),
    onPrevSpy: () => this.helper.get.spy("onPrev"),
    countText: () => this.helper.get.elementsText("count"),
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    nextButton: () => this.helper.get.elementByTestId("next"),
    prevButton: () => this.helper.get.elementByTestId("prev"),
    mock: { pokemonService: () => this.pokemonServiceMock }
  };
}
