const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/renderer/index.tsx",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "renderer.js",
    path: path.resolve(__dirname, "dist/renderer"),
  },
};
