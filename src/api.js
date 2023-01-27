const fs = require('fs');
const path = require('path');

const pathExists = (inputPath) => fs.existsSync(inputPath);
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
const toAbsolute = (inputPath) => path.resolve(inputPath);
const isMarkdown = (inputPath) => path.extname(inputPath) === '.md';
// const readFile = (inputPath) => fs.readFile(inputPath, 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });
const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf-8');

module.exports = {
  pathExists,
  isAbsolutePath,
  toAbsolute,
  isMarkdown,
  readFile,
};
