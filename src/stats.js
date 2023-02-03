const getNumberOfLinks = (links) => {
  const numberOfLinks = links.length;
  return `${numberOfLinks}`;
};

const getUniqueLinks = (links) => {
  const uniqueLinks = new Set(links.map((link) => link.href)).size;
  return `${uniqueLinks}`;
};

const getNumberOfBrokenLinks = (links) => {
  const numberOfBrokenLinks = links.filter((link) => link.message === 'fail').length;
  return `${numberOfBrokenLinks}`;
};

module.exports = {
  getNumberOfLinks,
  getUniqueLinks,
  getNumberOfBrokenLinks,
};
