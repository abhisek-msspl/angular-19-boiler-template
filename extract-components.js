// npm install ts-morph
// extract-components.js
const fs = require('fs');
const { Project } = require('ts-morph');

const project = new Project();
project.addSourceFilesAtPaths('src/**/*.component.ts');

const components = project
  .getSourceFiles()
  .map(file => {
    const classDecl = file.getClasses()[0];
    return classDecl ? classDecl.getName() : null;
  })
  .filter(Boolean);

// Write to .txt
fs.writeFileSync('angular-components.txt', components.join('\n'));

// Write to .json
fs.writeFileSync('angular-components.json', JSON.stringify(components, null, 2));

console.log('✅ Extracted component names to angular-components.txt and angular-components.json');
