import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
import type { Attributes, ReactNode } from "react";
import { IProps, PokemonGoComponent } from "./pokemon-go";

export class PokemonGoComponentDriver {
  private helper = new CypressHelper({ defaultDataAttribute: "data-hook" });
  private reactComponentHelper = new CypressReactComponentHelper();

  private props: IProps = {
    onSubmit: () => {}
  };

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {
    onSubmitSpy: () => (this.props.onSubmit = this.helper.given.spy("onSubmit"))
  };

  when = {
    render: (
      type: typeof PokemonGoComponent,
      props?: (Attributes & Partial<IProps>) | null,
      ...children: ReactNode[]
    ) => {
      const mergedProps: Attributes & IProps = { ...this.props, ...props };
      this.reactComponentHelper.when.mount(type, mergedProps, children);
    },
    typePokemonIndex: (input: string) => this.helper.when.type("pokemon-index", input),
    clickGo: () => this.helper.when.click("go")
  };

  get = {
    onSubmitSpy: () => this.helper.get.spy("onSubmit"),
    pokemonIndexInputValue: () => this.helper.get.inputValue("pokemon-index"),
    goButton: () => this.helper.get.elementByTestId("go")
  };
}
