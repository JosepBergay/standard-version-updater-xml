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

let singleNodeOutput = `<Project Sdk="Microsoft.NET.Sdk.Razor">

<PropertyGroup>
  <TargetFrameworkVersion>net5.0</TargetFrameworkVersion>
  <Version>1.4.2</Version>
  <Authors>jberg</Authors>
  <Description>My dotnet project 🔥</Description>
</PropertyGroup>

</Project>`;

describe.only('readVersion', () => {
  test('single node', () => {
    expect(readVersion(singleNodeInput)).toBe('1.4.1');
  });
  test('multiple nested nodes', () => {
    let contents = fs.readFileSync(path.join(__dirname, 'Test.xml'), 'utf8');
    expect(readVersion(contents)).toBe('1.4.1');
  });
});

test('writeVersion', () => {
  expect(writeVersion(singleNodeInput, '1.4.2')).toBe(singleNodeOutput);
});
