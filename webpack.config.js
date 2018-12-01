// const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
// const css = require('./test.css').toString();

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3030,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  }
};
