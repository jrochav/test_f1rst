const path = require('path');
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,

    stepDefinitions: (spec) => {
      if (spec.relative.includes('web')) {
        return path.join('cypress', 'support', 'step_definitions', 'web', `${spec.name}.steps.js`);
      }
      if (spec.relative.includes('api')) {
        return path.join('cypress', 'support', 'step_definitions', 'api', `${spec.name}.steps.js`);
      }
      return path.join('cypress', 'support', 'step_definitions');
    },

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });

      config.env.LOGIN_EMAIL = process.env.LOGIN_EMAIL;
      config.env.LOGIN_PASSWORD = process.env.LOGIN_PASSWORD;
      config.env.SEARCHED_ITEM = process.env.SEARCHED_ITEM;
      config.env.USER_NAME = process.env.USER_NAME;
      config.env.TRELLO_ACTION_ID = process.env.TRELLO_ACTION_ID;

      return config;
    }
  }
});
