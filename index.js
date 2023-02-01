const {
  pathExists,
  convertToAbsolutePath,
  isFile,
  isMarkdown,
  getLinks,
} = require('./src/api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = convertToAbsolutePath(path);
    if (isFile(absolutePath)) {
      if (isMarkdown(absolutePath)) {
        getLinks(absolutePath)
          .then((links) => {
            if (links.length !== 0) {
              resolve(links);
            } else {
              reject(new Error('this path doesnt have links'));
            }
          });
      } else {
        reject(new Error('the path isnt a markdown file'));
      }
    } else {
      reject(new Error('the path isnt a file'));
    }
  } else {
    reject(new Error('path doesnt exist'));
  }
});

module.exports = {
  mdLinks,
};
