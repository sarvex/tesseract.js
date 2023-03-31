const commonjs = require("@rollup/plugin-commonjs");

module.exports = exports = [
  {
    input: "dist/tesseract.min.js",
    output: {
      file: "dist/tesseract.esm.min.js",
      format: "esm",
      banner: "/* eslint-disable */",
    },
    plugins: [commonjs()],
  },
];
