import { devServer } from "@cypress/webpack-dev-server";
import { defineConfig } from "cypress";

import * as path from "path";
import * as Webpack from "webpack";

const webpackConfig = (
  cypressConfig: Cypress.PluginConfigOptions
): Webpack.Configuration => {
  return {
    resolve: {
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "ts-loader",
              options: { transpileOnly: true }
            }
          ]
        },
        {
          test: /\.(js|ts)$/,
          loader: "@jsdevtools/coverage-istanbul-loader",
          options: { esModules: true },
          enforce: "post",
          include: path.join(__dirname, "src"),
          exclude: [/\.(e2e)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/]
        }
      ]
    }
  };
};

const componentDevServerOptions = {
  projectConfig: {
    root: "",
    sourceRoot: "src",
    buildOptions: {
      outputPath: "dist",
      index: "src/index.html",
      main: "src/main.ts",
      polyfills: "src/polyfills.ts",
      tsConfig: "tsconfig.json",
      inlineStyleLanguage: "scss",
      assets: ["src/favicon.ico", "src/assets"],
      styles: ["src/styles.scss"],
      scripts: [],
      buildOptimizer: false,
      optimization: false,
      vendorChunk: true,
      extractLicenses: false,
      sourceMap: true,
      namedChunks: true
    }
  }
};

export default defineConfig({
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results/json",
    embeddedScreenshots: true,

    overwrite: false,
    html: false,
    json: true,
    suiteTitleSeparatedBy: " > ",
    testCaseSwitchClassnameAndName: false,
    rootSuiteTitle: "Angular Tests",
    toConsole: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("./cypress/plugins/index.ts").default(on, config);
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    baseUrl: "http://localhost:4200",
    viewportHeight: 1000,
    viewportWidth: 1600,
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/**/*.driver.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 50000,
    experimentalStudio: true
  },
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "angular",
        options: componentDevServerOptions,
        webpackConfig: webpackConfig(devServerConfig.cypressConfig)
      });
    },
    viewportHeight: 1000,
    viewportWidth: 1600,
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    specPattern: "src/**/*.cy.ts"
  }
});
