/*
 * Copyright (c) 2022 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    suiteTitleSeparatedBy: " > ",
    testCaseSwitchClassnameAndName: false,
    rootSuiteTitle: "Angular Tests",
    mochaFile: "target/surefire-reports/cypress-report-[hash].xml",
    toConsole: true,
    jenkinsMode: true
  },
  e2e: {
    baseUrl: "http://localhost:3000", // fix once we have github pages
    supportFile: false,
    specPattern: "cypress/e2e/**/*.spec.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/**/*.driver.{js,jsx,ts,tsx}",
    viewportHeight: 1000,
    viewportWidth: 1600,
    defaultCommandTimeout: 10000
  }
});
