const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = exports = {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
      const mod = resource.request.replace(/^node:/, '');
      switch (mod) {
        case 'buffer':
          resource.request = 'buffer';
          break;
        case 'stream':
          resource.request = 'readable-stream';
          break;
        default:
          throw new Error(`Not found ${mod}`);
      }
    }),
    new NodePolyfillPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      emitError: true,
      emitWarning: true,
      failOnWarning: false,
      failOnError: false,
      fix: false,
      cache: false,
    }),
  ],
};
