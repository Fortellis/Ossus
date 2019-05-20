const {
  isFile,
  getPath,
  writeOut,
  createDir,
  getFullPath,
  readJsonFile
} = require('../../utils/fsUtils');
const { parseDocument } = require('../../utils/helpers');
// Variables
const urlForm = '/:page/:section/:doc';

/**
 * Parses a set of documents structured as core Ossus documentation
 * Returns {object} defining TOC structure for this directory
 * @param {string} dirPath
 * @param {string} urlPath
 */
function docsBuilder(options) {
  const { directory, route } = options;
  const directoryPath = getPath(directory);
  // Ensure the directory has an index.json
  if (!isFile(directoryPath + '/index.json')) {
    throw { message: 'Index.json is required to build structure.' };
  }
  const index = readJsonFile(directoryPath + '/index.json');
  // Validate the given index to actual file heirarchy
  const missingDocuments = validateDocuments(directoryPath, index);
  if (missingDocuments) {
    throw {
      message: 'Missing defined documents.',
      documents: missingDocuments
    };
  }
  // Create dist documents and create TOC
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
    pages: index.pages.map(page => ({
      ...page,
      sections: page.sections.map(section => ({
        ...section,
        documents: section.documents.map(document => {
          const location = `${directory}/${page.name}/${section.name}/${document}.md`; // prettier-ignore
          try {
            const parsedDocument = parseDocument(location);
            writeOut(
              `${fullOuputDirectory}/${document}.json`,
              JSON.stringify(parsedDocument)
            );
            // Update the TOC to include file path and metadata
            return {
              name: document,
              path: `${outputDirectory}/${document}.json`,
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
      }))
    }))
  };
}

function validateDocuments(directory, index) {
  let missingDocuments = [];
  index.pages.forEach(({ name: pageName, sections }) => {
    sections.forEach(({ name: sectionName, documents }) => {
      documents.forEach(doc => {
        const location = `/${pageName}/${sectionName}/${doc}.md`;
        const p = directory + location;
        try {
          isFile(p);
        } catch (err) {
          missingDocuments.push(location);
        }
      });
    });
  });
  return missingDocuments.length ? missingDocuments : undefined;
}

module.exports = {
  docsBuilder
};
