const {
  isFile,
  writeOut,
  createDir,
  getFullPath,
  readJsonFile
} = require('../shared/filesystem');
const { parseDocument, mapTreeLeaves } = require('../shared/utilities');

/**
 * Parses a set of documents structured as core Ossus documentation
 * Returns {object} defining TOC structure for this directory
 * @param {string} dirPath
 * @param {string} urlPath
 */
function ossusBuilder(options) {
  const { directory, route, depth, page } = options;
  const directoryPath = getFullPath(directory);
  // Ensure the directory has an index.json
  if (!isFile(directoryPath + '/index.json')) {
    throw { message: 'Index.json is required to build structure.' };
  }
  const index = readJsonFile(directoryPath + '/index.json');
  // Validate the given index to actual file heirarchy
  const missingDocuments = validateDocuments(directoryPath, index, options);
  if (missingDocuments) {
    throw {
      message: 'Missing defined documents.',
      documents: missingDocuments
    };
  }
  // Create dist documents and create TOC
  const outputDirectory = '/static/' + route;
  const toc = transformDocuments(
    directoryPath,
    outputDirectory,
    index,
    options
  );
  return { ...toc, depth, page };
}

/**
 * Reads in each document and creats a dist json file of the content and metadata
 * Returns {obj} TOC
 * @param {string} directory
 * @param {string} outputDirectory
 * @param {obj} index
 */
function transformDocuments(directory, outputDirectory, index, { depth }) {
  const fullOuputDirectory = getFullPath(outputDirectory);
  createDir(fullOuputDirectory);
  try {
    return mapTreeLeaves(index, '', 0, depth, ({ name, location }) => {
      try {
        const parsedDocument = parseDocument(`${directory}/${location}`);
        writeOut(
          `${fullOuputDirectory}/${name}.json`,
          JSON.stringify(parsedDocument)
        );
        // Update the TOC to include file path and metadata
        return {
          name,
          path: `${outputDirectory}/${name}.json`,
          ...parsedDocument.metadata
        };
      } catch (err) {
        throw {
          message: 'Failed to transform document.',
          document: location,
          err
        };
      }
    });
  } catch (err) {
    throw err;
  }
}

// Need to be able to ensure that all documents listed exist
function validateDocuments(directory, index, options) {
  const documents = getBaseDocuments(index, options);
  let missingDocuments = [];

  documents.forEach(({ _location: location }) => {
    const p = directory + location;
    try {
      isFile(p);
    } catch (err) {
      missingDocuments.push(location);
    }
  });

  return missingDocuments.length ? missingDocuments : undefined;
}

// Returns a list of all base documents including their location (_location)
function getBaseDocuments(index, { depth }) {
  let collection = [index];
  for (let i = 0; i <= depth; i++) {
    collection = collection.reduce((acc, child) => {
      const children = getChildren(child).map(c => {
        const loc = child._location || '';
        if (typeof c === 'object') {
          return { ...c, _location: `${loc}/${c.name}` };
        }
        return { name: c, _location: `${loc}/${c}.md` };
      });
      return [...acc, ...children];
    }, []);
  }
  return collection;
}

function getChildren(object) {
  return object.children || [];
}

module.exports = {
  ossusBuilder
};
