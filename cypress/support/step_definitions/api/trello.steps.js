import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

const actionIdEnv = Cypress.env("TRELLO_ACTION_ID");

Given('que a API do Trello está disponível', () => {
  cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/actions/${actionIdEnv}`,
    failOnStatusCode: false
  }).then((res) => {
    cy.log(`Status da resposta da API Trello: ${res.status}`);
    cy.task('log', `Status da resposta da API Trello: ${res.status}`);
    expect(res.status).to.be.oneOf([200, 401, 403]);
  });
});

When('eu faço um GET na API Trello para a ação {string}', (actionIdParam) => {
  const actionIdToUse = actionIdParam === "<env>" ? actionIdEnv : actionIdParam;

  cy.request(`https://api.trello.com/1/actions/${actionIdToUse}`).then((res) => {
    response = res;
  });
});

Then('o status code da resposta deve ser {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
  cy.log(`O status code da resposta foi ${response.status} e era o valor esperado.`);
});

Then('o campo {string} deve conter algum valor', (fieldPath) => {
  const value = fieldPath.split('.').reduce((acc, curr) => acc && acc[curr], response.body);

  expect(value).to.exist.and.not.be.empty;

  cy.log(`O campo '${fieldPath}' tem o conteúdo: ${value}`);
  cy.task('log', `O campo '${fieldPath}' tem o conteúdo: ${value}`);
});
