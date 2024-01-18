const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const { WebpackPluginIstanbul } = require("webpack-plugin-istanbul");

module.exports = merge.merge(commonConfig, {
  //mode is development
  mode: "development",
  //to have source map inside javascript files
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },

    port: 4300
  },
  plugins: [
    new WebpackPluginIstanbul({
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.spec.cy.ts"],
      extension: [".ts"],
      cwd: process.cwd()
    })
  ]
});
