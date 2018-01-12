const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/browser-detection.js',
  output: {
    filename: 'browser-detection.js',
    library: 'browserDetection',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MinifyPlugin(),
  ],
};
