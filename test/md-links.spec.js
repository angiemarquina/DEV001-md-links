const { mdLinks } = require('../index');

const noPathExist = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\no-folder-test';
const txtFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\txt-file.txt';
const pathWithoutLinks = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\empty-md-file.md';
const markdownFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md';
const validateTrue = [
  {
    href: 'https://github.com/angiemarquina/DEV001-md-links/blob/main/README.md',
    text: 'README.md - angiemarquina',
    file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://pages.github.co/',
    text: 'GitHub pages',
    file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
    status: 'failed request',
    message: 'fail',
  },
];

describe('mdLinks test', () => {
  it('debe rechazar cuando el path no existe', () => mdLinks(noPathExist).catch((err) => {
    expect(err).toStrictEqual(new Error('path doesnt exist'));
  }));
  it('debe rechazar cuando el path no es un file md', () => mdLinks(txtFile).catch((err) => {
    expect(err).toStrictEqual(new Error('the path isnt a markdown file'));
  }));
  it('debe rechazar cuando no tenga links', () => mdLinks(pathWithoutLinks).catch((err) => {
    expect(err).toStrictEqual(new Error('this path doesnt have links'));
  }));
  it('validate true / output: href, text, file, status, message', () => mdLinks(markdownFile, { validate: true }).then((res) => {
    expect(res).toStrictEqual(validateTrue);
  }));
});
