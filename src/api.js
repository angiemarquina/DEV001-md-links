const fs = require('fs');
const path = require('path');

const pathExists = (inputPath) => fs.existsSync(inputPath);
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
const toAbsolute = (inputPath) => path.resolve(inputPath);
const convertToAbsolutePath = (inputPath) => {
  if (isAbsolutePath(inputPath)) {
    return inputPath;
  }
  return toAbsolute(inputPath);
};

const isFile = (inputPath) => fs.lstatSync(inputPath).isFile();
const isMarkdown = (inputPath) => path.extname(inputPath) === '.md';
// const readFile = (inputPath) => fs.readFile(inputPath, 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });
const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf-8');
const getLinks = (inputPath) => {
  const content = readFile(inputPath);
  const regex = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/g;
  const links = [];
  let match = regex.exec(content);
  while (match !== null) {
    links.push({
      href: match[2],
      text: match[1],
      file: inputPath,
    });
    match = regex.exec(content);
  }
  return links;
};

module.exports = {
  pathExists,
  isAbsolutePath,
  toAbsolute,
  convertToAbsolutePath,
  isFile,
  isMarkdown,
  readFile,
  getLinks,
};
