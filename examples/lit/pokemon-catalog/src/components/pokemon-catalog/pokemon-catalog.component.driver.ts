import { PokemonImageComponentDriver } from "@components/pokemon-image/pokemon-image.component.driver";
import { CypressHelper } from "dell-cypress-test-utils";
import { CypressLitComponentHelper } from "dell-cypress-test-utils/lit";
import { ContextProvider } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  PokemonInternalService,
  PokemonList,
  PokemonServiceContext
} from "../../services/pokemon.service";
import { PokemonCatalogComponent } from "./pokemon-catalog.component";
@customElement("pokemon-service-provider")
export class PokemonServiceProvider extends LitElement {
  @property({ type: Object, reflect: true })
  private pokemonService: PokemonInternalService;

  override connectedCallback() {
    super.connectedCallback();
    new ContextProvider(this, PokemonServiceContext, {
      pokemonService: () => {
        return this.pokemonService;
      }
    });
  }
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class PokemonCatalogComponentDriver {
  private helper = new CypressHelper();
  private litComponentHelper = new CypressLitComponentHelper();
  private pokemonService: PokemonInternalService; // = new PokemonInternalService();
  private getPokemonStub: Cypress.Agent<sinon.SinonStub<any[], any>>;
  private pokemonImageDriver: PokemonImageComponentDriver =
    new PokemonImageComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    ...this.helper.given,
    image: { ...this.pokemonImageDriver.given },
    pokemon: (value: PokemonList) => {
      this.pokemonService = new PokemonInternalService();
      this.getPokemonStub = this.helper.given.stub();
      this.pokemonService.getPokemon = this.getPokemonStub;
      this.getPokemonStub.callsFake(() => {
        return value;
      });
    },
    getPokemonSpy: () =>
      this.helper.given.spyOnObject(this.pokemonService, "getPokemon")
  };

  when = {
    ...this.helper.when,
    image: { ...this.pokemonImageDriver.when },
    render: (element: PokemonCatalogComponent) => {
      this.litComponentHelper.when.unmount(element);
      this.litComponentHelper.when.mount(
        element,
        html`<pokemon-service-provider
          .pokemonService="${this.pokemonService}"
        ><pokemon-catalog></pokemon-catalog></pokemon-catalog></pokemon-service-provider>`
      );
      this.when.waitUntil(() =>
        this.get.elementByTestId("next").should("be.visible")
      );
    },
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    ...this.helper.get,
    image: { ...this.pokemonImageDriver.get },
    countText: () => this.helper.get.elementsText("count"),
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    isNextButtonDisabled: () => this.helper.get.isElementDisabled("next"),
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev"),
    getPokemonSpy: () => this.getPokemonStub
  };
}
