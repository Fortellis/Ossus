const path = require('path');
const { pathExists } = require('../utils/fsUtils');
// Variables
const { DEFAULT_CONFIG, CONFIG_FILE_NAME } = require('./default');

function loadConfig(directory) {
  const configPath = path.resolve(directory, CONFIG_FILE_NAME);
  let config = { ...DEFAULT_CONFIG };
  if (pathExists(configPath)) {
    const userConfig = require(configPath);
    config = { ...config, ...userConfig };
  }
  return config;
}

module.exports = {
  loadConfig
};
