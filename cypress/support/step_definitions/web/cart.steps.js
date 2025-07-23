import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const product = Cypress.env("SEARCHED_ITEM");

When("o usuário adiciona o produto no carrinho", () => {
  cy.contains('.productinfo p', product)
    .parent()
    .within(() => {
      cy.get('a.btn.btn-default.add-to-cart').click();
    });
});

Then("o produto aparece em seu carrinho", () => {
  cy.get('.modal-body')
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart.');

  cy.get('.modal-body a')
    .should('have.attr', 'href', '/view_cart');

  cy.log("Produto inserido no carrinho com sucesso.");
});
