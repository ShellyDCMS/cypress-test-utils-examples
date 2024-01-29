import { then } from "@shellygo/cypress-test-utils";
import { AppDriver } from "../drivers/app.driver";

describe("Pokemon e2e", () => {
  const { when, get, beforeAndAfter } = new AppDriver();
  beforeAndAfter();

  beforeEach(function () {
    when.visit("/");
    when.waitUntil(() => get.elementByText("bulbasaur"));
  });

  it("prev button should be disabled", () => {
    then(get.pokemon.prevButton()).shouldBeDisabled();
  });

  it("should render pokemon index", () => {
    then(get.pokemon.countText()).shouldStartWith("1 of");
  });

  it("should render pokemon image", () => {
    then(get.pokemon.image.pictureSrc()).shouldEndWith("/1.gif");
  });

  it("should render pokemon name", () => {
    then(get.pokemon.nameText()).shouldEqual("bulbasaur");
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
      then(get.pokemon.countText()).shouldStartWith("3 of");
    });

    it("should update pokemon image", () => {
      then(get.pokemon.image.pictureSrc()).shouldEndWith("/3.gif");
    });

    it("prev button should be enabled", () => {
      then(get.pokemon.prevButton()).shouldBeEnabled();
    });

    it("should render pokemon name", () => {
      then(get.elementByText("venusaur")).shouldExist();
    });

    describe("when clicking prev", () => {
      beforeEach(() => {
        when.pokemon.clickPrev();
        when.waitUntil(() => get.elementByText("ivysaur"));
      });

      it("should update index", () => {
        then(get.pokemon.countText()).shouldStartWith("2 of");
      });

      it("should update pokemon image", () => {
        then(get.pokemon.image.pictureSrc()).shouldEndWith("/2.gif");
      });

      it("prev button should be enabled", () => {
        then(get.pokemon.prevButton()).shouldBeEnabled();
      });

      it("should render pokemon name", () => {
        then(get.elementByText("ivysaur")).shouldExist();
      });
    });
  });

  describe("when typing pokemon index and clicking Go", () => {
    beforeEach(() => {
      when.pokemon.pokemonGo.typePokemonIndex("25");
      when.pokemon.pokemonGo.clickGo();
      when.waitUntil(() => get.elementByText("pikachu"));
    });

    it("should update index", () => {
      then(get.pokemon.countText()).shouldStartWith("25 of");
    });

    it("should update pokemon image", () => {
      then(get.pokemon.image.pictureSrc()).shouldEndWith("/25.gif");
    });

    it("prev button should be enabled", () => {
      then(get.pokemon.prevButton()).shouldBeEnabled();
    });

    it("should render pokemon name", () => {
      then(get.elementByText("pikachu")).shouldExist();
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
      then(get.pokemon.image.pictureSrc()).shouldEndWith("/33.gif");
    });
  });
});
