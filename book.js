var pkg = require('./package.json');

module.exports = {
  // Documentation for GitBook is stored under "docs"
  root: './docs',
  title: 'fp-ts Functional programming in TypeScript',
  variables: {
    version: pkg.version
  }
};
