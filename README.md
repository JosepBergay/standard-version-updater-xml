# standard-version-updater-xml

An XML updater for [standard-version](https://github.com/conventional-changelog/standard-version). All the parsing and writing is done by [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2). Huge props to them 🎉, support these projects in any way you can!

## Install

```bash
npm install --save-dev standard-version-updater-xml
```

## Usage

You can use it as any other standard-version custom updater. In your config file:

### JS Config

```js
// .versionrc.js
const xmlUpdater = require('standard-version-updater-xml');

const xmlTracker = {
  filename: 'PATH_TO_MY_XML_FILE',
  updater: xmlUpdater,
};

module.exports = {
  packageFiles: [xmlTracker],
};
```

### JSON Config

```json
{
  "packageFiles": [
    {
      "filename": "PATH_TO_MY_XML_FILE",
      "updater": "node_modules/standard-version-updater-xml/index.js"
    }
  ]
}
```
Then, use standard-version in your preferred flavour (mine):
```bash
npx standard-version
```

## Notes
* You can use any file parseable by [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2), even ``.csproj`` files!
* Empty lines will be removed when writing version.
* An xml declaration will be added on top the file if it's not already present.