const toc = require('./config/tableOfContents');
const { generatePathMap } = require('ossus');

module.exports = {
    webpack: (config) => {
        // Setup markdown loader
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    },
    exportPathMap: generatePathMap(toc)
};