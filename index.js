const { create } = require('xmlbuilder2');

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
  const doc = create(contents);
  const versionNode = doc.find(n => isVersion(n.node.nodeName), true, true);
  return versionNode?.node.textContent;
};

const writeVersion = (contents, version) => {
  const doc = create(contents);
  doc.find(
    n => {
      if (isVersion(n.node.nodeName)) {
        n.node.textContent = version;
        return true;
      }
    },
    true,
    true
  );
  return doc.end({ prettyPrint: true });
};

module.exports = {
  readVersion,
  writeVersion,
};
