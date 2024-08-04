const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 3,  // Número de tentativas ao rodar `cypress run`
      openMode: 3, // Número de tentativas ao rodar `cypress open`
    },
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout: 15000,
    baseUrl: 'https://creative-sherbet-a51eac.netlify.app/',
    supportFile: 'cypress/support/commands.js',
    chromeWebSecurity: false
  },
});
