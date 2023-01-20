const { mdLinks } = require('./index');

mdLinks('/noexiste.md').then(() => {

}).catch((error) => {
  console.log(error);
});
