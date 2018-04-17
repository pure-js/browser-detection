const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/browser-detection.js',
  output: {
    filename: 'browser-detection.min.js',
    library: 'browserDetection',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MinifyPlugin(),
  ],
};
