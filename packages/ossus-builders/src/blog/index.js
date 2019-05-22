const {
  isFile,
  writeOut,
  createDir,
  getFullPath,
  readJsonFile
} = require('../shared/filesystem');
const { parseDocument } = require('../shared/utilities');
// Variables
const urlForm = '/:post';

/**
 * Parses a set of documents structured as core Ossus blogs
 * Returns {object} defining TOC structure for this directory
 * @param {string} dirPath
 * @param {string} urlPath
 */
function blogBuilder(options) {
  const { directory, route } = options;
  const directoryPath = getFullPath(directory);
  // Ensure the directory has an index.json for ordering
  // Allow for sort based ordering by date in frontmatter as option
  if (!isFile(directoryPath + '/index.json')) {
    throw { message: 'Index.json is required to build structure.' };
  }
  const index = readJsonFile(directoryPath + '/index.json');
  // Create dist documents and return TOC
  const outputDirectory = '/static' + route;
  const toc = transformDocuments(directoryPath, outputDirectory, index);
  return { ...toc, route: route + urlForm };
}

/**
 * Reads in each document and creats a dist json file of the content and metadata
 * Returns {obj} TOC
 * @param {string} directory
 * @param {string} outputDirectory
 * @param {obj} index
 */
function transformDocuments(directory, outputDirectory, index) {
  const fullOuputDirectory = getFullPath(outputDirectory);
  createDir(fullOuputDirectory);
  return {
    posts: index.posts.map(post => {
      const location = `${directory}/${post}.md`;
      try {
        const parsedDocument = parseDocument(location);
        writeOut(
          `${fullOuputDirectory}/${post}.json`,
          JSON.stringify(parsedDocument)
        );
        return {
          name: 'post',
          path: `${outputDirectory}/${post}.json`,
          ...parsedDocument.metadata
        };
      } catch (err) {
        throw {
          message: 'Failed to transform document.',
          document: location,
          err
        };
      }
    })
  };
}

module.exports = {
  blogBuilder
};