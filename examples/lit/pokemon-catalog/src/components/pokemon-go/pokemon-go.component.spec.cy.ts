import { PokemonGoComponent } from "./pokemon-go.component";
import { PokemonGoComponentDriver } from "./pokemon-go.component.driver";

describe("Lit PokemonImageComponent", () => {
  const { when, given, get, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  it("when typing index and submiting should call onSubmit", () => {
    given.onSubmitSpy();
    when.render(new PokemonGoComponent());
    when.typePokemonIndex("33");
    when.clickGo();
    expect(get.onSubmitSpy().should("have.been.calledWith", "33"));
  });

  it("should not update input value when typing non digits", async () => {
    given.onSubmitSpy();
    when.render(new PokemonGoComponent());
    when.typePokemonIndex("abcd-");
    expect(await get.indexValue()).to.eq("");
  });

  it("should empty input when clicking submit", async () => {
    given.onSubmitSpy();
    when.render(new PokemonGoComponent());
    when.typePokemonIndex("33");
    when.clickGo();
    expect(await get.indexValue()).to.eq("");
  });
});
