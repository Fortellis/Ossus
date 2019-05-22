const { writeOut, getFullPath, joinPaths } = require('./fsUtils');

function log(message) {
  // eslint-disable-next-line
  console.log(message);
}

function writeTocFile(toc) {
  writeOut(
    getFullPath(joinPaths('config', 'tableOfContents.js')),
    `module.exports = ${JSON.stringify(toc, null, 4)}`
  );
}

module.exports = {
  log,
  writeTocFile
};
