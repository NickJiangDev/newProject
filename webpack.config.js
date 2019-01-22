const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
const devMode = process.env.NODE_ENV !== "production";

var config = {
  entry: ["webpack/hot/dev-server", path.resolve(__dirname, "app/main.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  }
};

module.exports = config;
