const { mdLinks } = require('../index');

mdLinks('./folder-test/md-file.md', { validate: true }).then((links) => {
  console.log(links);
}).catch((error) => {
  console.log(error);
});
