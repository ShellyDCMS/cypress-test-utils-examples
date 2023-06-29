import { AppDriver } from "../support/app.driver";

describe("React Pokemon e2e", () => {
  const { when, get, beforeAndAfter } = new AppDriver();
  beforeAndAfter();

  beforeEach(function () {
    when.visit("/");
    when.waitUntil(() => cy.contains("bulbasaur"));
  });

  it("should render prev button disabled", async () => {
    expect(await get.pokemon.isPrevButtonDisabled()).to.be.true;
  });

  it("should render index", async () => {
    expect(await get.pokemon.countText()).to.include("1 of");
  });

  it("should render the first pokemon", async () => {
    expect(await get.pokemon.image.pictureSrc()).to.include("1.gif");
  });

  it("should render pokemon name", () => {
    expect(cy.contains("bulbasaur")).to.exist;
  });

  describe("when clicking next twice", () => {
    beforeEach(() => {
      when.visit("/");
      when.waitUntil(() => cy.contains("bulbasaur"));
      when.pokemon.clickNext();
      when.waitUntil(() => cy.contains("ivysaur"));
      when.pokemon.clickNext();
      when.waitUntil(() => cy.contains("venusaur"));
    });

    it("should update index", async () => {
      expect(await get.pokemon.countText()).to.include("3 of");
    });

    it("should update pokemon image", async () => {
      expect(await get.pokemon.image.pictureSrc()).to.include("3.gif");
    });

    it("prev button should be enabled", async () => {
      expect(await get.pokemon.isPrevButtonDisabled()).to.be.false;
    });

    it("should render pokemon name", () => {
      expect(cy.contains("venusaur")).to.exist;
    });

    describe("when clicking prev", () => {
      beforeEach(() => {
        when.pokemon.clickPrev();
        when.waitUntil(() => cy.contains("ivysaur"));
      });

      it("should update index", async () => {
        expect(await get.pokemon.countText()).to.include("2 of");
      });

      it("should update pokemon image", async () => {
        expect(await get.pokemon.image.pictureSrc()).to.include("2.gif");
      });

      it("prev button should be enabled", async () => {
        expect(await get.pokemon.isPrevButtonDisabled()).to.be.false;
      });

      it("should render pokemon name", () => {
        expect(cy.contains("ivysaur")).to.exist;
      });
    });
  });
});
