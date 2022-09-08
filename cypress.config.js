const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ebj6h1',
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500
  },
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env: {
      baseUrl: 'https://www.tatilbudur.com',
      FOO: 'bar'
    }
  },
});
