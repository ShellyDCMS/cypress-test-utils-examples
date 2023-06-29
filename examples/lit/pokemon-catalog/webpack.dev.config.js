const path = require('path');
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge.merge(commonConfig, {
  //mode is development
  mode: "development",
  //to have source map inside javascript files
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },

    port: 4300
  },
});