/**
 * @type {Cypress.PluginConfig}
 */
import * as registerCodeCoverageTasks from "@cypress/code-coverage/task";

export default (on, config) => {
  const webpackPreprocessor = require("@cypress/webpack-batteries-included-preprocessor");

  const webpackOptions = webpackPreprocessor.defaultOptions.webpackOptions;

  webpackOptions.module.rules.unshift({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false
    },
    use: {
      loader: "babel-loader",
      options: {
        plugins: ["@angular/compiler-cli/linker/babel"],
        compact: false,
        cacheDirectory: true
      }
    }
  });

  on(
    "file:preprocessor",
    webpackPreprocessor({
      webpackOptions: webpackOptions,
      typescript: require.resolve("typescript")
    })
  );

  return registerCodeCoverageTasks(on, config);
};
