/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("input", () => {
    cy.get('input[placeholder="Email"]').type("test@sample");
  });
});

export {};
