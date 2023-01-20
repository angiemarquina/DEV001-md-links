const fs = require('fs');
const path = require('path');

const pathExists = (path) => fs.existsSync(path);
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
const toAbsolute = (inputPath) => path.resolve(inputPath);

module.exports = {
  pathExists,
  isAbsolutePath,
  toAbsolute,
};
