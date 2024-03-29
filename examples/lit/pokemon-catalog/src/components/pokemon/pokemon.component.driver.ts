import { provide } from "@lit/context";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressLitComponentHelper } from "@shellygo/cypress-test-utils/lit";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { PokemonService, pokemonServiceContext } from "../../services/pokemon.service";
import { Pokemon } from "./pokemon.component";

const pokemonServiceMock = new CypressHelper().given.stubbedInstance(PokemonService);

@customElement("pokemon-service-provider")
export class PokemonServiceProvider extends LitElement {
  @provide({ context: pokemonServiceContext })
  pokemonService: PokemonService = pokemonServiceMock;
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class PokemonComponentDriver {
  private helper = new CypressHelper({ defaultDataAttribute: "data-hook" });
  private componentHelper = new CypressLitComponentHelper();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {
    pokemon: (value: { next: string | null; previous: string | null; results: { name: string }[] }) => {
      pokemonServiceMock.getPokemon.returns(value);
      pokemonServiceMock.getPokemonByOffset.returns(value);
    }
  };

  when = {
    render: (element: Pokemon) => {
      this.componentHelper.when.unmount(element);
      this.componentHelper.when.mount(
        element,
        html`<pokemon-service-provider><pokemon-component></pokemon-component></pokemon-service-provider>`
      );
    },
    clickNext: () => this.helper.when.click("next"),
    clickPrev: () => this.helper.when.click("prev")
  };

  get = {
    nameText: () => this.helper.get.elementsText("pokemon-name"),
    mock: { pokemonService: () => pokemonServiceMock }
  };
}
