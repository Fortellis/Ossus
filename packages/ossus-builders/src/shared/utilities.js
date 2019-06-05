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

function mapTreeLeaves(node, path, level, depth, fn) {
  if (level === depth + 1) {
    if (typeof node === 'object' && node.children) {
      throw { message: 'Index object exceeded provided depth' };
    }
    return fn({ name: node, location: `${path}/${node}.md` });
  }
  if (!node.children) {
    throw { message: 'Missing children', level };
  }
  const newPath = node.name ? `${path}/${node.name || ''}` : path;
  return {
    ...node,
    children: node.children.map(child =>
      mapTreeLeaves(child, newPath, level + 1, depth, fn)
    )
  };
}

module.exports = {
  log,
  blogSort,
  writeTocFile,
  parseDocument,
  mapTreeLeaves
};
