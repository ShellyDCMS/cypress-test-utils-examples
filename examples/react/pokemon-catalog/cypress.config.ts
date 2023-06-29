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
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000",
    viewportHeight: 1000,
    viewportWidth: 1600,
    specPattern: "cypress/integration/**/*.spec.cy.{js,jsx,ts,tsx}"
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack"
    },
    specPattern: "src/**/*.spec.cy.{js,jsx,ts,tsx}"
  }
});
