const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { localIdentName } = require("./base");

const client = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  entry: path.join(__dirname, "../src/client/index"),
  output: {
    path: path.join(__dirname, "../dist/client"),
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
            loader: MiniCssExtractPlugin.loader,
          },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};

const server = {
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  entry: path.join(__dirname, "../src/server/index"),
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  output: {
    path: path.join(__dirname, "../dist/server"),
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
  plugins: [],
};

module.exports = [client, server];
