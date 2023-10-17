module.exports = {
  mode: "development",
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              // skip typechecking for speed
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};
