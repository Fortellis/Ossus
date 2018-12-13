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
    exportPathMap: async function() {
        const pageKeys = generatePathMap(toc);
        return {
            // Add your pages
            '/': { page: '/' },
            '/404': { page: '/_error' },
            // Adding dynamically generated paths for docs
            ...pageKeys
        }
    }
};