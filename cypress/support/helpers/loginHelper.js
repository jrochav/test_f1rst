export function login(email, password, username) {
  cy.visit("https://www.automationexercise.com/login");
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
  cy.get('li')
    .contains('Logged in as')
    .should('contain.text', username)
    .and('be.visible');
}