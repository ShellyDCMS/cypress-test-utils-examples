import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results/json",
    overwrite: false,
    html: false,
    json: true,
    suiteTitleSeparatedBy: " > ",
    testCaseSwitchClassnameAndName: false,
    rootSuiteTitle: "Lit Tests",
    toConsole: true
  },
  includeShadowDom: true,

  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite"
    },
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    specPattern: "src/**/*.spec.cy.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 10000
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4300",
    viewportHeight: 1000,
    viewportWidth: 1600,
    specPattern: "cypress/integration/**/*.spec.cy.{js,jsx,ts,tsx}"
  }
});
