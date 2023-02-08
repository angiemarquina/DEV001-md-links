const chalk = require('chalk');

const ok = chalk.green;
const fail = chalk.red;

const { mdLinks } = require('./index');

const path = process.argv[2];

const options = {
  validate: process.argv.includes('--validate') || process.argv.includes('--v'),
  stats: process.argv.includes('--stats') || process.argv.includes('--s'),
  help: process.argv.includes('--help'),
};

const {
  getNumberOfLinks,
  getUniqueLinks,
  getNumberOfBrokenLinks,
} = require('./stats');

if (options.help) {
  console.log(`
  Usage: md-links <path-to-file> [options]
  +____________________+_________________________________________________________+
  |      Comands       |                         Output                          |
  +____________________+_________________________________________________________+
  | md-links path      | Print href, text and file.                              |
  +____________________+_________________________________________________________+
  | --stats            | Print total and unique links.                           |
  +____________________+_________________________________________________________+
  | --validate         | Print href, text, file, message(ok or fail) and status. |
  +____________________+_________________________________________________________+
  | --validate --stats | Print total, unique and broken links.                   |
  +____________________+_________________________________________________________+
  | --stats --validate | Print total, unique and broken links.                   |
  +____________________+_________________________________________________________+
  | --help             | Print comands list.                                     |
  +____________________+_________________________________________________________+
  `);
} else if (options.validate && !(options.stats)) {
  mdLinks(path, options)
    .then((links) => {
      links.forEach((link) => {
        console.log(`
        href: ${link.href} 
        text: ${link.text}
        file: ${link.file}
        status: ${link.status}
        message: ${link.message === 'ok' ? ok(link.message) : fail(link.message)}
        `);
      });
    })
    .catch((err) => {
      console.log(err);
    });
} else if (options.stats && !(options.validate)) {
  mdLinks(path, options)
    .then((links) => {
      console.log(`
      Total: ${getNumberOfLinks(links)}
      Unique: ${getUniqueLinks(links)}
      `);
    })
    .catch((err) => {
      console.log(err);
    });
} else if ((options.stats) && (options.validate)) {
  mdLinks(path, options)
    .then((links) => {
      console.log(`
      Total: ${getNumberOfLinks(links)}
      Unique: ${getUniqueLinks(links)}
      Broken: ${getNumberOfBrokenLinks(links)}
      `);
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  console.log('⚠ Invalid comand. If you need help, please type  md-links --help');
}
