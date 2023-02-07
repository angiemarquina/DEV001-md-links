const {
  pathExists,
  isAbsolutePath,
  convertToAbsolutePath,
  isFile,
  isMarkdown,
  readFile,
  getLinks,
} = require('../src/api');

const existPath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test';
const noPathExist = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\no-folder-test';
const absolutePath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md';
const relativePath = 'folder-test\\md-file.md';
const filePath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md';
const markdownFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md';
const txtFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\txt-file.txt';
const noFileExist = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\no-md-file.md';
const outputLinks = [
  {
    href: 'https://github.com/angiemarquina/DEV001-md-links/blob/main/README.md',
    text: 'README.md - angiemarquina',
    file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
  },
  {
    href: 'https://pages.github.co/',
    text: 'GitHub pages',
    file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
  },
];

describe('pathExists test', () => {
  it('debe retornar true si la ruta existe', () => {
    expect(pathExists(existPath)).toBe(true);
  });
  it('debe retornar false si la ruta no existe', () => {
    expect(pathExists(noPathExist)).toBe(false);
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

describe('convertToAbsolutePath test', () => {
  it('debe retornar una ruta absoluta', () => {
    expect(convertToAbsolutePath(relativePath)).toBe(absolutePath);
  });
});

describe('isFile test', () => {
  it('debe retornar true si la ruta es archivo', () => {
    expect(isFile(filePath)).toBe(true);
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
  it('debe retornar el contenido del archivo', () => readFile(txtFile).then((data) => {
    expect(data).toEqual('hola');
  }));
  it('debe rechazar cuando el archivo no existe', () => readFile(noFileExist).catch((err) => {
    expect(err).toBeDefined();
  }));
});

describe('getLinks test', () => {
  it('debe retornar un array de links', () => getLinks(markdownFile).then((data) => {
    expect(data).toEqual(outputLinks);
  }));
  it('debe rechazar cuando el archivo no existe', () => getLinks(noFileExist).catch((err) => {
    expect(err).toBeDefined();
  }));
});
