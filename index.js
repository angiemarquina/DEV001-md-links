const { pathExists, isAbsolutePath } = require('./src/api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!pathExists(path)) {
    reject(new Error('la ruta no existe'));
  } else {
    resolve(isAbsolutePath(path));
  }
});

module.exports = {
  mdLinks,
};
