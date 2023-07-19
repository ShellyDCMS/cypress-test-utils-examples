/*
 * Copyright (c) 2022 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
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
    rootSuiteTitle: "Angular E2E Tests",
    toConsole: true
  },
  e2e: {
    baseUrl: "http://localhost:4200/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.spec.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/**/*.driver.{js,jsx,ts,tsx}",
    viewportHeight: 1000,
    viewportWidth: 1600,
    defaultCommandTimeout: 10000
  }
});
