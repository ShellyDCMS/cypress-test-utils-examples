describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
  });

  it("should disable next button once showing last pokemon", () => {
    cy.visit("localhost:3000");

    cy.contains("Next").should("be.disabled");
  });
});
