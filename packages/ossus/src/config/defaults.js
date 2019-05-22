const { documentationBuilder } = require('ossus-builders');
// Variables
const CONFIG_FILE_NAME = 'ossus.config.js';
const DEFAULT_CONFIG = {
  documents: [
    {
      directory: '/documentation',
      route: '/docs',
      builder: documentationBuilder
    }
  ]
};

module.exports = { DEFAULT_CONFIG, CONFIG_FILE_NAME };
