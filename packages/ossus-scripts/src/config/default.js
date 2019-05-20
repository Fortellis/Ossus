const { docsBuilder } = require('../builders/docsBuilder');

const CONFIG_FILE_NAME = 'ossus.config.js';

const DEFAULT_CONFIG = {
  documents: [
    {
      directory: '/documentation',
      route: '/docs',
      builder: docsBuilder
    }
  ]
};

module.exports = { DEFAULT_CONFIG, CONFIG_FILE_NAME };
