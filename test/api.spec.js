const {
  pathExists, isAbsolutePath, toAbsolute, isMarkdown,
} = require('../src/api');

describe('pathExists test', () => {
  const existPath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test';
  const noExistPath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\no-folder-test';

  it('debe retornar true si la ruta existe', () => {
    expect(pathExists(existPath)).toBe(true);
  });
  it('debe retornar false si la ruta no existe', () => {
    expect(pathExists(noExistPath)).toBe(false);
  });
});

describe('isAbsolutePath test', () => {
  const absolutePath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-md.md';
  const relativePath = 'folder-test\\file-md.md';

  it('debe retornar true si la ruta es absoluta', () => {
    expect(isAbsolutePath(absolutePath)).toBe(true);
  });
  it('debe retornar false si la ruta no es absoluta', () => {
    expect(isAbsolutePath(relativePath)).toBe(false);
  });
});

describe('toAbsolute test', () => {
  const absolutePath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-md.md';
  const relativePath = 'folder-test\\file-md.md';

  it('debe retornar una ruta absoluta', () => {
    expect(toAbsolute(relativePath)).toBe(absolutePath);
  });
});

describe('isMarkdown test', () => {
  const markdownFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-md.md';
  const txtFile = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\file-txt.txt';

  it('debe retornar true si la ruta es un archivo markdown', () => {
    expect(isMarkdown(markdownFile)).toBe(true);
  });
  it('debe retornar false si la ruta no es un archivo markdown', () => {
    expect(isMarkdown(txtFile)).toBe(false);
  });
});
