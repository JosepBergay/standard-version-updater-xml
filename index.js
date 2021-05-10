const xml = require('fast-xml-parser');

const isVersion = key => key === 'version' || key === 'Version';

const findVersion = obj => {
  if (isVersion(obj.tagname)) {
    return obj.val;
  }
  if (Array.isArray(obj)) {
    return obj.reduce((p, c) => p ?? findVersion(c), null);
  }
  return obj.child && Object.keys(obj.child).reduce((p, c) => p ?? findVersion(obj.child[c]), null);
};

const readVersion = contents => {
  const obj = xml.getTraversalObj(contents);
  return findVersion(obj);
};

const writeVersion = (contents, version) => {
  //   const file = xml.parse(contents);
  //   file.version = version;
  //   return new xml.j2xParser().parse(file);
};

module.exports = {
  readVersion,
  writeVersion,
};
