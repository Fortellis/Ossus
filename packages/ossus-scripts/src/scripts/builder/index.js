const { extractFrontmatter } = require('./frontmatter');
// Utilities
const { log, blogSort } = require('../../utils/helpers');
const {
  isDir,
  isFile,
  readDir,
  readFile,
  writeOut,
  joinPaths,
  pathExists,
  getFullPath,
  isFileHidden,
  readJsonFile,
  containsIndex
} = require('../../utils/fsUtils');
// Variables
const { DEFAULT_BLOG_DIR, DEFAULT_DOC_DIR } = require('../../constants');

function handleBlogPosts(path, sortFn, options) {
  const files = readDir(path);
  return files
    .map(file => {
      const filePath = joinPaths(path, file);
      return handleFile(filePath, file, options);
    })
    .sort(sortFn);
}

function replaceVariables(md, options) {
  const re = /\$\[(.+)\]/g;
  const newMd = md.replace(re, (match, p1) => {
    return options.variables[p1][options.env];
  });
  return newMd;
}

function handleFile(path, file, options) {
  if (!isFile(path) || isFileHidden(file)) {
    log(`Oops... couldn't find ${file}`);
    return;
  }
  const md = readFile(path);
  const fm = extractFrontmatter(md);

  if (options.variables) {
    const newMd = replaceVariables(md, options);
    // If variables used re-write file
    if (md !== newMd) {
      writeOut(path, newMd);
    }
  }

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

function handleSection(path, section, options) {
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
    return handleFile(joinPaths(path, doc), doc, options);
  });
  return {
    route: section.route,
    label: section.label,
    children
  };
}

function handlePages(path, options) {
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
      const s = handleSection(
        joinPaths(pagePath, section.route),
        section,
        options
      );
      if (s) pageContents.sections.push(s);
    });
    return { ...toc, [key]: pageContents };
  }, {});
}

/* TODO:
 * Support args for changing the names of both doc and blog directories
 */
function main() {
  const toc = {};
  const options = {};
  options.env = process.argv[3] || 'dev';
  // Define content directories
  const docPath = getFullPath(DEFAULT_DOC_DIR);
  const blogPath = getFullPath(DEFAULT_BLOG_DIR);

  if (pathExists(docPath)) {
    const vPath = `${docPath}/variables.json`;
    if (pathExists(vPath)) {
      options.variables = readJsonFile(vPath);
    }
    toc.docs = handlePages(docPath, options);
  }

  if (pathExists(blogPath)) {
    toc.blog = handleBlogPosts(blogPath, blogSort, options);
  }

  return toc;
}

module.exports = main;
