const { writeOut, getFullPath, joinPaths, isFile, readFile } = require('./filesystem');
const { extractFrontmatter } = require('./frontmatter');

function log(message) {
  // eslint-disable-next-line
  console.log(message);
}

function blogSort(a, b) {
  const aDate = new Date(a['last updated']);
  const bDate = new Date(b['last updated']);
  return bDate - aDate;
}

function writeTocFile(toc) {
  writeOut(
    getFullPath(joinPaths('config', 'tableOfContents.js')),
    `module.exports = ${JSON.stringify(toc, null, 4)}`
  );
}

function parseDocument(location) {
  try {
    isFile(location);
  } catch (err) {
    throw err;
  }
  // Parse document
  const content = readFile(location);
  const metadata = extractFrontmatter(content);
  return {
    metadata,
    content
  };
}

module.exports = {
  log,
  blogSort,
  writeTocFile,
  parseDocument
};
