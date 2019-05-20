const { docsBuilder } = require('./src/builders/docsBuilder');

module.exports = {
  documents: [
    {
      directory: '/documents',
      route: '/docs',
      builder: docsBuilder
    }
  ]
};