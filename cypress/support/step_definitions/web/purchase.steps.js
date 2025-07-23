import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const product = Cypress.env("SEARCHED_ITEM");
const expectedQuantity = 1;

When("o usuário entra em seu carrinho", () => {
  cy.get('li > a[href="/view_cart"]').click();
});

When("valida se os produtos conferem com o que ele inseriu", () => {
  cy.get('tbody > tr').then((rows) => {
    if (rows.length > 1) {
      cy.log(`⚠️ AVISO: Seu carrinho contém ${rows.length} produtos, mais do que o esperado.`);
      throw new Error("Não será possível seguir para pagamento pois o carrinho tem produtos adicionais.");
    }

    cy.wrap(rows[0]).within(() => {
      cy.get('.cart_description h4 a').invoke('text').then((text) => {
        if (text.trim() !== product) {
          cy.log(`⚠️ AVISO: Produto no carrinho é diferente do esperado (${product}).`);
          throw new Error("Produto incorreto no carrinho.");
        }
      });

      cy.get('td.cart_quantity button.disabled').invoke('text').then((qtyText) => {
        const quantity = parseInt(qtyText.trim());
        if (quantity > expectedQuantity) {
          cy.log(`⚠️ AVISO: Quantidade do produto "${product}" é maior que a esperada (${expectedQuantity}).`);
          throw new Error("Quantidade incorreta no carrinho.");
        }
      });
    });
  });
});

Then("o usuário segue para o pagamento", () => {
  cy.get('a').contains('Proceed To Checkout').click();
  cy.url().should('include', '/checkout');
  cy.log("Carrinho validado com sucesso e seguindo para pagamento.");
});