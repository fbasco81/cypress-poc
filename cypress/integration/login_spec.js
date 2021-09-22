describe("Verify login", () => {
  it("Access login page", () => {
    cy.visit("https://www.mymsc.com");

    cy.get("button:contains('OK'):visible").click();

    // cy.intercept("*/b2c-assets/*").as("b2c-assets");
    cy.intercept("**login.html*").as("b2c-login");

    cy.get("button:contains('All other locations')").click();

    cy.wait(["@b2c-login"]).then((interceptions) => {
      cy.get("#email").type("fbasco81@gmail.com");
      cy.get("#password").type("$v^8weM7lMAf");
      cy.get("#next").click();
    });
  });
});
