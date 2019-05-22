const fs = require('fs');
const path = require('path');
// Variables
const { DEFAULT_CONFIG, CONFIG_FILE_NAME } = require('./defaults');

function loadConfig(directory) {
  const configPath = path.resolve(directory, CONFIG_FILE_NAME);
  let config = { ...DEFAULT_CONFIG };
  if (fs.existsSync(configPath)) {
    const userConfig = require(configPath);
    config = { ...config, ...userConfig };
  }
  return config;
}

module.exports = {
  loadConfig
};
