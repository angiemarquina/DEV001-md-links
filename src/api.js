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
const readFile = (inputPath) => new Promise((resolve, reject) => {
  fs.readFile(inputPath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const getLinks = (inputPath) => new Promise((resolve, reject) => {
  const links = [];
  readFile(inputPath)
    .then((data) => {
      const regex = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/g;
      let match = regex.exec(data);
      while (match !== null) {
        links.push({
          href: match[2],
          text: match[1],
          file: inputPath,
        });
        match = regex.exec(data);
      }
      resolve(links);
    })
    .catch((err) => {
      reject(err);
    });
});

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
