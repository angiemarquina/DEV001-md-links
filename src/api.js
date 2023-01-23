const fs = require('fs');
const path = require('path');

const pathExists = (path) => fs.existsSync(path);
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
const toAbsolute = (inputPath) => path.resolve(inputPath);
const isMarkdown = (inputPath) => path.extname(inputPath) === '.md';

module.exports = {
  pathExists,
  isAbsolutePath,
  toAbsolute,
  isMarkdown,
};
