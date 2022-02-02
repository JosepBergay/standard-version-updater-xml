const updater = require('../index.js');
const { singleNodeInput, singleNodeOutput, headlessSingleNodeOutput } = require('./inputs.js');
const fs = require('fs');
const path = require('path');

describe('readVersion', () => {
  const { readVersion } = updater;
  test('single node', () => {
    expect(readVersion(singleNodeInput)).toBe('1.4.1');
  });
  test('multiple nested nodes', () => {
    let contents = fs.readFileSync(path.join(__dirname, 'Test.xml'), 'utf8');
    expect(readVersion(contents)).toBe('1.4.1');
  });
  test('should equally work as a function with a single node', () => {
    expect(updater().readVersion(singleNodeInput)).toBe('1.4.1');
  });
  test('should equally work as a function with multiple nested nodes', () => {
    let contents = fs.readFileSync(path.join(__dirname, 'Test.xml'), 'utf8');
    expect(updater().readVersion(contents)).toBe('1.4.1');
  });
});

describe('writeVersion', () => {
  const { writeVersion } = updater;
  test('single node', () => {
    expect(writeVersion(singleNodeInput, '2.0.1-alpha.0')).toBe(singleNodeOutput);
  });
  test('should equally work as a function', () => {
    const up = updater({ prettyPrint: true });
    expect(up.writeVersion(singleNodeInput, '2.0.1-alpha.0')).toBe(singleNodeOutput);
  });
  test('should accept extra params', () => {
    const up = updater({ prettyPrint: true, headless: true });
    expect(up.writeVersion(singleNodeInput, '2.0.1-alpha.0')).toBe(headlessSingleNodeOutput);
  });
});
