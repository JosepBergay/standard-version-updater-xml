const { create } = require('xmlbuilder2');

/**
 * @callback VersionReader
 * @param {import('xmlbuilder2/lib/interfaces').XMLBuilderCreateOptions} contents
 * @returns {string}
 */

/**
 * @callback VersionWriter
 * @param {import('xmlbuilder2/lib/interfaces').XMLBuilderCreateOptions} contents
 * @param {string} version
 * @returns {string}
 */

/**
 * @typedef {Object} Updater
 * @property {VersionReader} readVersion
 * @property {VersionWriter} writeVersion
 */

const isVersion = key => key === 'version' || key === 'Version';

/**
 * @type {VersionReader}
 */
const readVersion = contents => {
  const doc = create(contents);
  const versionNode = doc.find(n => isVersion(n.node.nodeName), true, true);
  return versionNode && versionNode.node.textContent;
};

/**
 * @param {import('xmlbuilder2/lib/interfaces').XMLWriterOptions} writerOptions
 * @returns {VersionWriter}
 */
const writeVersion = writerOptions => (contents, version) => {
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
  return doc.end(writerOptions || { prettyPrint: true });
};

/**
 * @type {Updater & (writerOptions: import('xmlbuilder2/lib/interfaces').XMLWriterOptions) => Updater}
 */
const updater = writerOptions => ({
  readVersion,
  writeVersion: writeVersion(writerOptions),
});

updater.readVersion = readVersion;
updater.writeVersion = writeVersion();

module.exports = updater;
