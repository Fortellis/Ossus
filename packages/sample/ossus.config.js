const { documentationBuilder, blogBuilder, ossusBuilder } = require('ossus-builders');

module.exports = {
  documents: [
    {
      directory: '/documentation',
      route: 'docs',
      builder: ossusBuilder,
      depth: 2,
      page: 'doc'
    }
  ]
}