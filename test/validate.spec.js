const fetch = require('node-fetch');
const { verifyLinks } = require('../src/validate');

jest.mock('node-fetch');

const objectReceived = [
  {
    href: 'https://github.com/angiemarquina/DEV001-md-links/blob/main/README.md',
    text: 'README.md - angiemarquina',
    file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
  },
];

describe('verifyLinks debe retornar el código 200 status', () => {
  it("status: 200 - message: 'ok'", () => {
    const objectExpected = [
      {
        href: 'https://github.com/angiemarquina/DEV001-md-links/blob/main/README.md',
        text: 'README.md - angiemarquina',
        file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
        status: 200,
        message: 'ok',
      },
    ];
    fetch.mockResolvedValueOnce({ status: 200, ok: true });
    verifyLinks(objectReceived)
      .then((result) => {
        expect(result).toEqual(objectExpected);
      });
  });
});

describe('verifyLinks debe retornar el código 400 status', () => {
  it("status: 400 - message: 'fail'", () => {
    const objectExpected = [
      {
        href: 'https://github.com/angiemarquina/DEV001-md-links/blob/main/README.md',
        text: 'README.md - angiemarquina',
        file: 'C:\\Users\\Dell\\Documents\\GitHub\\DEV001-md-links\\folder-test\\md-file.md',
        status: 400,
        message: 'fail',
      },
    ];
    fetch.mockResolvedValueOnce({ status: 400, fail: true });
    verifyLinks(objectReceived)
      .then((result) => {
        expect(result).toEqual(objectExpected);
      });
  });
});
