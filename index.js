const { pathExists, isAbsolutePath, toAbsolute } = require('./src/api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!pathExists(path)) {
    reject(new Error('la ruta no existe'));
  } else {
    resolve(isAbsolutePath(path));
  }
});

console.log(pathExists('C:/Users/Dell/Documents/GitHub/DEV001-md-links/prueba md/ejemplo.md'));
console.log(pathExists('/noexiste.md'));
console.log(isAbsolutePath('C:/Users/Dell/Documents/GitHub/DEV001-md-links/prueba md/ejemplo.md'));
console.log(toAbsolute('./src/api'));

module.exports = {
  mdLinks,
};
