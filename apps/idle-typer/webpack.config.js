var path = require("path");
var GasPlugin = require("gas-webpack-plugin");

module.exports = {
  plugins: [new GasPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
