const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const webpack = require("webpack");
const ZipFilesPlugin = require("webpack-archive-plugin");

const outputDir = path.join(__dirname, "build/");

function pad(s, size) {
  return "0".repeat(size - String(s).length) + s;
}

function getVersionFromDate(d) {
  const year = pad(d.getFullYear(), 4);
  const month = pad(d.getMonth() + 1, 2);
  const day = pad(d.getDate(), 2);
  const minutes = pad(d.getHours() * 60 + d.getMinutes(), 5);

  return [year, month, day, minutes].join(".");
}

module.exports = (env, config) => {
  const version = getVersionFromDate(new Date());
  const versionName = `${version}`;
  return {
    entry: {
      Demo: "./src/Demo.bs.js",
      TodoApp: "./src/TodoApp/TodoApp.bs.js",
      styles: "./src/shared/styles.sass"
    },
    mode: "development", // TODO: change this to production when appropriate
    devtool: "source-map",
    output: {
      path: outputDir,
      publicPath: outputDir,
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            MiniCssExtractPlugin.loader, // extract it into a file
            "css-loader", // loads css into module
            "sass-loader" // compiles Sass to CSS
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        // { from: "manifest.json", to: "" },
        { from: "static/**", to: "", context: "src/" },
        { from: "./node_modules/crx-hotreload/hot-reload.js", to: "" }
      ]),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        // filename: "[name].css"
      }),
      new webpack.DefinePlugin({
        webpackDefinedPeardeckConfig: JSON.stringify({
          ...config,
          VERSION: version
        })
      })
    ]
  };
};
