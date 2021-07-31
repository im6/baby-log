const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ServerStartPlugin = require("./plugins/ServerStartPlugin");
const { localIdentName } = require("./base");

const client = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  entry: path.join(__dirname, "../src/client/index"),
  output: {
    path: path.join(__dirname, "../local/client"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName,
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [],
};

const server = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  watch: true,
  entry: path.join(__dirname, "../src/server/index"),
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  output: {
    path: path.join(__dirname, "../local/server"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName,
                exportOnlyLocals: true,
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [new ServerStartPlugin("./local/server/index")],
};

module.exports = [client, server];
