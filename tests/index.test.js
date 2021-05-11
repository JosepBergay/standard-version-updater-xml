const { readVersion, writeVersion } = require('../index.js');
const fs = require('fs');
const path = require('path');

let singleNodeInput = `<Project Sdk="Microsoft.NET.Sdk.Razor">

  <PropertyGroup>
    <TargetFrameworkVersion>net5.0</TargetFrameworkVersion>
    <Version>1.4.1</Version>
    <Authors>jberg</Authors>
    <Description>My dotnet project 🔥</Description>
  </PropertyGroup>

</Project>`;

let singleNodeOutput = `<?xml version="1.0"?>
<Project Sdk="Microsoft.NET.Sdk.Razor">
  <PropertyGroup>
    <TargetFrameworkVersion>net5.0</TargetFrameworkVersion>
    <Version>2.0.1-alpha.0</Version>
    <Authors>jberg</Authors>
    <Description>My dotnet project 🔥</Description>
  </PropertyGroup>
</Project>`;

describe('readVersion', () => {
  test('single node', () => {
    expect(readVersion(singleNodeInput)).toBe('1.4.1');
  });
  test('multiple nested nodes', () => {
    let contents = fs.readFileSync(path.join(__dirname, 'Test.xml'), 'utf8');
    expect(readVersion(contents)).toBe('1.4.1');
  });
});

describe('writeVersion', () => {
  test('single node', () => {
    expect(writeVersion(singleNodeInput, '2.0.1-alpha.0')).toBe(singleNodeOutput);
  });
});
