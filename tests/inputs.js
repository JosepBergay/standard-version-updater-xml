const singleNodeInput = `<Project Sdk="Microsoft.NET.Sdk.Razor">

  <PropertyGroup>
    <TargetFrameworkVersion>net5.0</TargetFrameworkVersion>
    <Version>1.4.1</Version>
    <Authors>jberg</Authors>
    <Description>My dotnet project 🔥</Description>
  </PropertyGroup>

</Project>`;

const singleNodeOutput = `<?xml version="1.0"?>
<Project Sdk="Microsoft.NET.Sdk.Razor">
  <PropertyGroup>
    <TargetFrameworkVersion>net5.0</TargetFrameworkVersion>
    <Version>2.0.1-alpha.0</Version>
    <Authors>jberg</Authors>
    <Description>My dotnet project 🔥</Description>
  </PropertyGroup>
</Project>`;

const headlessSingleNodeOutput = `<Project Sdk="Microsoft.NET.Sdk.Razor">
  <PropertyGroup>
    <TargetFrameworkVersion>net5.0</TargetFrameworkVersion>
    <Version>2.0.1-alpha.0</Version>
    <Authors>jberg</Authors>
    <Description>My dotnet project 🔥</Description>
  </PropertyGroup>
</Project>`;

module.exports = {
  singleNodeInput,
  singleNodeOutput,
  headlessSingleNodeOutput,
};
