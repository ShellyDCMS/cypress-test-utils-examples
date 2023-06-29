import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mocha-junit-reporter",

  reporterOptions: {
    suiteTitleSeparatedBy: " > ",
    testCaseSwitchClassnameAndName: false,
    rootSuiteTitle: "React Component Tests",
    mochaFile: "target/surefire-reports/cypress-report-[hash].xml",
    toConsole: true,
    jenkinsMode: true
  },

  includeShadowDom: true,

  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite"
    },
    specPattern: "src/**/*.spec.cy.{js,jsx,ts,tsx}"
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
