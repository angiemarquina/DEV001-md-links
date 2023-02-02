const {
  pathExists,
  convertToAbsolutePath,
  isFile,
  isMarkdown,
  getLinks,
} = require('./src/api');

const { verifyLinks } = require('./src/validate');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!pathExists(path)) {
    reject(new Error('path doesnt exist'));
  }
  const absolutePath = convertToAbsolutePath(path);
  if (!isFile(absolutePath)) {
    reject(new Error('the path isnt a file'));
  }
  if (!isMarkdown(absolutePath)) {
    reject(new Error('the path isnt a markdown file'));
  }
  getLinks(absolutePath)
    .then((links) => {
      if (links.length === 0) {
        reject(new Error('this path doesnt have links'));
      }
      if (options.validate === false) {
        resolve(links);
      }
      verifyLinks(links)
        .then((response) => {
          resolve(response);
        });
    });
});

module.exports = {
  mdLinks,
};
