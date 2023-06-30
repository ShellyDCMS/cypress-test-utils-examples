/*
 * Copyright (c) 2022 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    suiteTitleSeparatedBy: " > ",
    testCaseSwitchClassnameAndName: false,
    rootSuiteTitle: "React Component Tests",
    toConsole: true,
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
