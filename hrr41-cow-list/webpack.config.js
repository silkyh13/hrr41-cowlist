const HtmlWebPackPlugin = require("html-webpack-plugin");//
const { join, resolve } = require('path');

//https://www.valentinog.com/blog/babel/   <= use as refernce
//https://webpack.js.org/configuration/watch/
module.exports = {
  watch: true,
  entry: "./client/components/app.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
            /node_modules/,
            /compiled/
        ],
        use: {
          loader: "babel-loader"
        }//run babel-loader for any js or jsx files
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }//run html-loader for any html
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, 'client', 'index.html'),//find the file
      filename: "./index.html"
    })//tskes the template which is client.index.html and does the html loader part and inserts into dist (folder) > index.html
  ]
};
//serve index and main.js for core issues