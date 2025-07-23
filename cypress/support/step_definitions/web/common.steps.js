import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../helpers/loginHelper";

const product = Cypress.env("SEARCHED_ITEM");
const email = Cypress.env("LOGIN_EMAIL");
const password = Cypress.env("LOGIN_PASSWORD");
const userName = Cypress.env("USER_NAME")

Given("que o usuário está logado", () => {
  return login(email, password, userName);
});

When("o usuário entra na página de produtos", () => {
  cy.get('li > a').contains('Products').click();
});

When("digita o tipo de produto que está buscando", () => {
  cy.get('#search_product').click();
  cy.get('#search_product').type(product);
  cy.get('#submit_search').click();
});
