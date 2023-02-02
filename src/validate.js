const fetch = require('node-fetch');

const verifyLinks = (links) => Promise.all(links.map((link) => fetch(link.href)
  .then((response) => {
    if (response.ok) {
      return {
        href: link.href,
        text: link.text,
        file: link.file,
        status: response.status,
        message: 'ok',
      };
    }
    return {
      href: link.href,
      text: link.text,
      file: link.file,
      status: response.status,
      message: 'fail',
    };
  })
  .catch(() => ({
    href: link.href,
    text: link.text,
    file: link.file,
    status: 'failed request',
    message: 'fail',
  }))));

module.exports = {
  verifyLinks,
};
