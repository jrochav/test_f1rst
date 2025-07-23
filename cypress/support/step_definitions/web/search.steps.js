import { Then } from "@badeball/cypress-cucumber-preprocessor";

const product = Cypress.env("SEARCHED_ITEM");

Then("o usuário visualiza o produto que pesquisou", () => {
  cy.get('p')
    .contains(product)
    .should('be.visible');
  cy.log("Produto pesquisado com sucesso.");
});