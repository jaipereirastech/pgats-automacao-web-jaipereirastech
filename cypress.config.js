const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    openMode: 0,
    runMode: 2
  },
  e2e: {
    defaultCommandTimeout: 10000, //Definindo timeout para o caso 15
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
