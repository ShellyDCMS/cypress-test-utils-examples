import { PokemonGoComponentDriver } from "@components/pokemon-go/pokemon-go.component.driver";
import { PokemonImageComponentDriver } from "@components/pokemon-image/pokemon-image.component.driver";
import { ContextProvider } from "@lit-labs/context";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressLitComponentHelper } from "@shellygo/cypress-test-utils/lit";
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

  private pokemonServiceMock: Partial<PokemonInternalService> = {
    getPokemon: url => Promise.reject(),
    getPokemonByOffset: offset => Promise.reject()
  };
  private pokemonImageDriver: PokemonImageComponentDriver =
    new PokemonImageComponentDriver();
  private pokemonGoDriver: PokemonGoComponentDriver =
    new PokemonGoComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonImageDriver.beforeAndAfter();
  };

  given = {
    image: this.pokemonImageDriver.given,
    pokemonGo: this.pokemonGoDriver.given,
    pokemon: (value: PokemonList) => {
      this.pokemonServiceMock.getPokemon = this.helper.given
        .stub()
        .as(this.pokemonServiceMock.getPokemon!.name)
        .returns(value);

      this.pokemonServiceMock.getPokemonByOffset = this.helper.given
        .stub()
        .as(this.pokemonServiceMock.getPokemonByOffset!.name)
        .returns(value);
    }
  };

  when = {
    image: this.pokemonImageDriver.when,
    pokemonGo: this.pokemonGoDriver.when,
    render: (element: PokemonCatalogComponent) => {
      this.litComponentHelper.when.unmount(element);
      this.litComponentHelper.when.mount(
        element,
        html`<pokemon-service-provider
          .pokemonService="${this.pokemonServiceMock}"
        ><pokemon-catalog></pokemon-catalog></pokemon-catalog></pokemon-service-provider>`
      );
      this.helper.when.waitUntil(() =>
        this.helper.get.elementByTestId("next").should("be.visible")
      );
    },
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    image: this.pokemonImageDriver.get,
    pokemonGo: this.pokemonGoDriver.get,
    countText: () => this.helper.get.elementsText("count"),
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    isNextButtonDisabled: () => this.helper.get.isElementDisabled("next"),
    isPrevButtonDisabled: () => this.helper.get.isElementDisabled("prev"),
    getPokemonSpy: () =>
      this.helper.get.spyFromFunction(this.pokemonServiceMock.getPokemon!),
    getPokemonByOffsetSpy: () =>
      this.helper.get.spyFromFunction(
        this.pokemonServiceMock.getPokemonByOffset!
      )
  };
}
