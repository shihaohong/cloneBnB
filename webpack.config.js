const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.jsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  mode: 'none',
  plugins: [
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
