const { mdLinks } = require('../index');

describe('mdLinks', () => {
  it('debe rechazar cuando el path no existe', () => mdLinks('/noexiste.md').catch((error) => {
    expect(error).toStrictEqual(new Error('la ruta no existe'));
  }));
});
