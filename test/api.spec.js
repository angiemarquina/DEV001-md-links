const {
  pathExists, isAbsolutePath, toAbsolute, isMarkdown, readFile, getLinks,
} = require('../src/api');

const existPath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test';
const noExistPath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\no-folder-test';
const absolutePath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-md.md';
const relativePath = 'folder-test\\file-md.md';
const markdownFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-md.md';
const txtFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-txt.txt';
const outputLinks = [
  {
    href: 'https://github.com/angiemarquina/DEV001-md-links/blob/main/README.md',
    text: 'README.md - angiemarquina',
    file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-md.md',
  },
];

describe('pathExists test', () => {
  it('debe retornar true si la ruta existe', () => {
    expect(pathExists(existPath)).toBe(true);
  });
  it('debe retornar false si la ruta no existe', () => {
    expect(pathExists(noExistPath)).toBe(false);
  });
});

describe('isAbsolutePath test', () => {
  it('debe retornar true si la ruta es absoluta', () => {
    expect(isAbsolutePath(absolutePath)).toBe(true);
  });
  it('debe retornar false si la ruta no es absoluta', () => {
    expect(isAbsolutePath(relativePath)).toBe(false);
  });
});

describe('toAbsolute test', () => {
  it('debe retornar una ruta absoluta', () => {
    expect(toAbsolute(relativePath)).toBe(absolutePath);
  });
});

describe('isMarkdown test', () => {
  it('debe retornar true si la ruta es un archivo markdown', () => {
    expect(isMarkdown(markdownFile)).toBe(true);
  });
  it('debe retornar false si la ruta no es un archivo markdown', () => {
    expect(isMarkdown(txtFile)).toBe(false);
  });
});

describe('readFile test', () => {
  it('debe retornar el contenido del archivo', () => {
    expect(readFile(txtFile)).toEqual('hola');
  });
});

describe('getLinks test', () => {
  it('debe retornar un array de links', () => {
    expect(getLinks(markdownFile)).toEqual(outputLinks);
});
});
