const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@services": path.resolve(__dirname, "src/services"),
      "@components": path.resolve(__dirname, "src/components")
    }
  },
  entry: "./src/main.ts",
  output: {
    //as the files can be cached by browser, so use content hash to generate new file name on its content changes
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    //to clean dist folder
    new CleanWebpackPlugin(),
    //to inject built javascript into html
    new HtmlWebpackPlugin({
      favicon: "src/favicon.ico",
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module: {
    //loaders for loading different file types
    rules: [
      {
        // Match js, ts files
        test: /\.(js|ts)?$/,
        loader: "esbuild-loader",
        options: {
          // JavaScript version to compile to
          target: "es2020"
        }
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "lit-css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed"
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  }
};
