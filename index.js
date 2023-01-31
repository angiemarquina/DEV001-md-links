const {
  pathExists, convertToAbsolutePath, isFile, isMarkdown, getLinks,
} = require('./src/api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path)) {
    const absolutePath = convertToAbsolutePath(path);
    if (isFile(absolutePath)) {
      if (isMarkdown(absolutePath)) {
        const links = getLinks(absolutePath);
        resolve(links);
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

console.log(mdLinks('C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md'));
console.log(mdLinks('./folder-test/md-file.md'));
console.log(mdLinks('./folder-test/md-file-doesnt-exist.md'));
console.log(mdLinks('./folder-test/txt-file.txt'));

module.exports = {
  mdLinks,
};
