const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '/src/dist/js'),
  },
  module:{
    rules:[{
        loader: 'babel-loader',
        test: '/\.(js|jsx)$/',
        exclude: /node_modules/
    }]
},
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
};