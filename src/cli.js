const { mdLinks } = require('../index');

mdLinks('./folder-test/empty-md-file.md').then((links) => {
  console.log(links);
}).catch((error) => {
  console.log(error);
});
