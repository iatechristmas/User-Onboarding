describe("Form inputs", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });

  it("order button is disabled", () => {
    cy.get("button.submit").should("be.disabled");
  });

  it("can enter a name", () => {
    cy.get('input[name="name"]')
      .type("Matthew Molloy")
      .should("have.value", "Matthew Molloy");
  });

  it("can enter an email address", () => {
    cy.get('input[name="email"]')
      .type("iatechristmas@gmail.com")
      .should("have.value", "iatechristmas@gmail.com");
  });

  it("can enter a password", () => {
    cy.get('input[name="password"]')
      .type("abcd12345")
      .should("have.value", "abcd12345");
  });

  it("can accept the TOS checkbox", () => {
    cy.get('[type="checkbox"]').first().check();
  });

  it("order button not disabled any more", () => {
    cy.get("button.submit").should("not.be.disabled");
  });
});

describe("Form validation", () => {
  it("validates username correctly", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Username required").should("not.exist");
    cy.get('input[name="name"]').type("a");
    cy.contains("Username required");
    cy.get('input[name="name"]').type("b");
    cy.contains("Username required").should("exist");

    cy.get('input[name="name"]').type("c");
    cy.contains("Username required").should("not.exist");
  });
});

describe("Submitting a team member", () => {
  it("can submit a team member", () => {
    // navigate the site again
    // fill out form
    cy.visit("http://localhost:3000");
    cy.get('input[name="name"]').type("Matthew Molloy");
    cy.get('input[name="email"]').type("iatechristmas@gmail.com");
    cy.get('input[name="password"]').type("abcd12345");
    cy.get('[type="checkbox"]').first().check();
    // submit form by hitting submit button
    cy.get("button.submit").click();
  });
});
