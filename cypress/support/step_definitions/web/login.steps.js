import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const email = Cypress.env("LOGIN_EMAIL");
const password = Cypress.env("LOGIN_PASSWORD");
const userName = Cypress.env("USER_NAME");

Given("que o usuário entre na página de login", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("ele informa seus dados de acesso corretamente", () => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Then("o usuário está conectado com êxito na tela inicial", () => {
  cy.get("li")
    .contains("Logged in as")
    .should("contain.text", userName)
    .and("be.visible");
  cy.log("Login realizado com sucesso.");
});
