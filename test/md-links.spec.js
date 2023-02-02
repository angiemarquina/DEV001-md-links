const { mdLinks } = require('../index');

const noExistPath = 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\no-folder-test';

describe('mdLinks test', () => {
  it('debe rechazar cuando el path no existe', () => mdLinks(noExistPath).catch((error) => {
    expect(error).toStrictEqual(new Error('path doesnt exist'));
  }));
});
