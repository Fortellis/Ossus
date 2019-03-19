const { writeOut, getFullPath, joinPaths } = require('./fsUtils');

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

module.exports = {
  log,
  blogSort,
  writeTocFile
};