import { AppDriver } from "../drivers/app.driver";

describe("Pokemon e2e", () => {
  const { when, get, beforeAndAfter } = new AppDriver();
  beforeAndAfter();

  beforeEach(function () {
    when.visit("/");
    when.waitUntil(() => get.elementByText("bulbasaur"));
  });

  it("prev button should be disabled", () => {
    expect(get.pokemon.prevButton().should("be.disabled"));
  });

  it("should render pokemon index", () => {
    expect(get.pokemon.countText().should("include", "1 of"));
  });

  it("should render pokemon image", () => {
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
      expect(get.pokemon.prevButton().should("be.enabled"));
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
        expect(get.pokemon.prevButton().should("be.enabled"));
      });

      it("should render pokemon name", () => {
        expect(get.elementByText("ivysaur")).to.exist;
      });
    });
  });
});
