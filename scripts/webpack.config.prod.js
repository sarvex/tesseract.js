const path = require('path');
const common = require('./webpack.config.common');

genConfig = ({ entry, filename, library, libraryTarget }) => ({
  ...common,
  mode: 'production',
  devtool: 'source-map',
  entry,
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename,
    library,
    libraryTarget,
  },
});

module.exports = [
  genConfig({
    entry: path.resolve(__dirname, '..', 'src', 'index.js'),
    filename: 'tesseract.min.js',
    library: 'Tesseract',
    libraryTarget: 'umd',
  }),
  genConfig({
    entry: path.resolve(
      __dirname,
      '..',
      'src',
      'worker-script',
      'browser',
      'index.js',
    ),
    filename: 'worker.min.js',
  }),
];
