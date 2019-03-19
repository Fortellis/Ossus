const { extractFrontmatter } = require('./frontmatter');
// Utilities
const { log, blogSort } = require('../../utils/helpers');
const {
  isDir,
  isFile,
  readDir,
  writeOut,
  joinPaths,
  pathExists,
  getFullPath,
  isFileHidden,
  readJsonFile,
  containsIndex,
} = require('../../utils/fsUtils');
// Variables
const { DEFAULT_BLOG_DIR, DEFAULT_DOC_DIR } = require('../../constants');

function handleBlogPosts(path, sortFn) {
  const files = readDir(path);
  return files
    .map(file => {
      const filePath = joinPaths(path, file);
      return handleFile(filePath, file);
    })
    .sort(sortFn);
}

function handleFile(path, file) {
  if (!isFile(path) || isFileHidden(file)) {
    log(`Oops... couldn't find ${file}`);
    return;
  }
  const fm = extractFrontmatter(path);
  const name = file.split('.')[0];
  if (!fm) {
    log(`You should consider adding frontmatter to ${file}`);
    return {
      doc: name,
      label: name
    };
  }
  const { title, ...rest } = fm;
  return {
    doc: file.split('.')[0],
    label: title,
    ...rest
  };
}

function handleSection(path, section) {
  if (!isDir(path) || isFileHidden(section.route)) {
    log(`Oops... couldn't find section: ${section}`);
    return;
  }
  if (!containsIndex(path)) {
    log(`Section ${section.route} needs and index.json`);
    return;
  }
  const index = readJsonFile(joinPaths(path, 'index.json'));
  const children = index.order.map(doc => {
    return handleFile(joinPaths(path, doc), doc);
  });
  return {
    route: section.route,
    label: section.label,
    children
  };
}

function handlePages(path) {
  const index = readJsonFile(joinPaths(path, 'index.json'));
  return Object.entries(index).reduce((toc, page) => {
    const [key, value] = page;
    const pagePath = joinPaths(path, key);
    // Check if given page is valid
    if (!isDir(pagePath) || isFileHidden(key)) {
      log(`Oops... couldn't find page: ${key}`);
      return toc;
    }
    // Setup page metadata in TOC
    const pageContents = {
      label: value.label ? value.label : key,
      description: value.description ? value.description : '',
      sections: []
    };
    // Add sections under current page
    if (!containsIndex(pagePath)) {
      log(`${key} needs an index.json file`);
      return toc;
    }
    // Process index.json
    const index = readJsonFile(joinPaths(pagePath, 'index.json'));
    index.order.map(section => {
      const s = handleSection(joinPaths(pagePath, section.route), section);
      if (s) pageContents.sections.push(s);
    });
    return { ...toc, [key]: pageContents };
  }, {});
}

function main() {
  const toc = {};
  // Define content directories
  const docPath = getFullPath(DEFAULT_DOC_DIR);
  const blogPath = getFullPath(DEFAULT_BLOG_DIR);

  if (pathExists(docPath)) {
    toc.docs = handlePages(docPath);
  }

  if (pathExists(blogPath)) {
    toc.blog = handleBlogPosts(blogPath, blogSort);
  }

  return toc;
}

module.exports = main;
