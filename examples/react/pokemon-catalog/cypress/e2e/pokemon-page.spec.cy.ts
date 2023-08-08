import { AppDriver } from "../drivers/app.driver";

describe("React Pokemon e2e", () => {
  const { when, get, beforeAndAfter } = new AppDriver();
  beforeAndAfter();

  beforeEach(function () {
    when.visit("/");
    when.waitUntil(() => get.elementByText("bulbasaur"));
  });

  it("should render prev button disabled", () => {
    expect(get.pokemon.isPrevButtonDisabled().should("eq", "disabled"));
  });

  it("should render index", () => {
    expect(get.pokemon.countText().should("include", "1 of"));
  });

  it("should render the first pokemon", () => {
    expect(get.pokemon.image.pictureSrc().should("include", "1.gif"));
  });

  it("should render pokemon name", () => {
    expect(get.pokemon.nameText().should("eq", "bulbasaur"));
  });

  describe("when clicking next twice", () => {
    beforeEach(() => {
      when.visit("/");
      when.waitUntil(() => get.elementByText("bulbasaur"));
      when.pokemon.clickNext();
      when.waitUntil(() => get.elementByText("ivysaur"));
      when.pokemon.clickNext();
      when.waitUntil(() => get.elementByText("venusaur"));
    });

    it("should update index", () => {
      expect(get.pokemon.countText().should("include", "3 of"));
    });

    it("should update pokemon image", () => {
      expect(get.pokemon.image.pictureSrc().should("include", "3.gif"));
    });

    it("prev button should be enabled", () => {
      expect(get.pokemon.isPrevButtonDisabled().should("eq", undefined));
    });

    it("should render pokemon name", () => {
      expect(get.elementByText("venusaur")).to.exist;
    });

    describe("when clicking prev", () => {
      beforeEach(() => {
        when.pokemon.clickPrev();
        when.waitUntil(() => get.elementByText("ivysaur"));
      });

      it("should update index", () => {
        expect(get.pokemon.countText().should("include", "2 of"));
      });

      it("should update pokemon image", () => {
        expect(get.pokemon.image.pictureSrc().should("include", "2.gif"));
      });

      it("prev button should be enabled", () => {
        expect(get.pokemon.isPrevButtonDisabled().should("eq", undefined));
      });

      it("should render pokemon name", () => {
        expect(get.elementByText("ivysaur")).to.exist;
      });
    });
  });

  describe("when changing from pokemon without gif to pokemon with gif, should show gif", () => {
    it("should render pokemon gif", () => {
      when.pokemon.pokemonGo.typePokemonIndex("888");
      when.pokemon.pokemonGo.clickGo();
      when.waitUntil(() => get.elementByText("zacian"));
      when.pokemon.pokemonGo.typePokemonIndex("33");
      when.pokemon.pokemonGo.clickGo();
      when.waitUntil(() => get.elementByText("nidorino"));
      expect(get.pokemon.image.pictureSrc().should("include", "/33.gif"));
    });
  });
});
