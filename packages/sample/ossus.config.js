const { documentationBuilder, blogBuilder } = require('ossus-builders');

module.exports = {
  documents: [
    {
      directory: '/documentation',
      route: '/docs',
      builder: documentationBuilder
    },
    {
      directory: '/blog',
      route: '/posts',
      builder: blogBuilder
    }
  ]
}