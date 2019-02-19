const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
const devMode = process.env.NODE_ENV !== "production";

var config = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      routes: path.resolve(__dirname, "../src/routes")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
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
        test: /\.css$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        // 只针对antd生效。exclude： 排除src，等于只针对node_modules
        test: /\.css$/i,
        exclude: [/src/],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },

      {
        test: /\.(sa|sc|le)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader?modules",
          "sass-loader",
          "less-loader"
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
