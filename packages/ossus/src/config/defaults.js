const { ossusBuilder } = require('ossus-builders');
// Variables
const CONFIG_FILE_NAME = 'ossus.config.js';
const DEFAULT_CONFIG = {
  documents: [
    {
      directory: '/documentation',
      route: 'docs',
      page: 'doc',
      builder: ossusBuilder,
      depth: 2
    }
  ]
};

module.exports = { DEFAULT_CONFIG, CONFIG_FILE_NAME };
