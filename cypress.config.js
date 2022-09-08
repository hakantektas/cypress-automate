const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ebj6h1',
  e2e: {
    defaultCommandTimeout: 60000,
    pageLoadTimeout:90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
