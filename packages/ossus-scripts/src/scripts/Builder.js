const fs = require('fs');
const {
  log,
  exists,
  isHidden,
  isDir,
  isFile,
  hasIndex
} = require('./utils');

const DEFAULT_DOC_DIR = 'documentation';
const DEFAULT_BLOG_DIR = 'blog';

function Builder() {
  const docDir = DEFAULT_DOC_DIR;
  const blogDir = DEFAULT_BLOG_DIR;
  const toc = {};
  if (exists(`${process.cwd()}/${docDir}`)) toc.docs = handlePages(docDir);
  if (exists(`${process.cwd()}/${blogDir}`)) toc.blog = handleBlogPosts(blogDir, blogSort);

  fs.writeFileSync(
    `${process.cwd()}/config/tableOfContents.js`,
    `module.exports = ${JSON.stringify(toc, null, 4)}`
  );
  log('Wrote out table of contents!');
}

function blogSort(a, b) {
  const aDate = new Date(a['last updated']);
  const bDate = new Date(b['last updated']);
  return bDate - aDate;
}

function getFrontmatterData(fm) {
  let data = {};
  let matches;
  const re2 = /([^\n]+):\s{1}([^\n]+)\n/g;
  
  while ((matches = re2.exec(fm)) !== null) {
    data[matches[1]] = matches[2];
  }
  return data;
}

// Extract metadata from frontmatter
function getFrontmatter(path) {
  const md = fs.readFileSync(path, 'utf8');
  const re = /---\n((([^\n]+:)\s{1}[^\n]+\n)+)---/;
  const res = re.exec(md);
  if (!res) {
    return null;
  }
  return getFrontmatterData(res[1]);
}

function handleFile(path, file) {
  if (!isFile(path) || isHidden(file)) {
    log(`Oops... couldn't find ${file}`);
    return;
  }
  const fm = getFrontmatter(path);
  const name = file.split('.')[0];
  if (!fm) {
    log(`You should consider adding frontmatter to ${file}`);
    return {
      doc: name,
      label: name
    };
  }
  const {
    title,
    ...rest
  } = fm;
  return {
    doc: file.split('.')[0],
    label: title,
    ...rest
  };
}

function handleSection(path, section) {
  if (!isDir(path) || isHidden(section.route)) {
    log(`Oops... couldn't find section: ${section}`);
    return;
  }
  if (!hasIndex(path)) {
    log(`Section ${section.route} needs and index.json`);
    return;
  }
  const index = require(`${path}/index.json`);
  const children = index.order.map(doc => {
    return handleFile(`${path}/${doc}`, doc);
  });
  return {
    route: section.route,
    label: section.label,
    children,
  };
}

function handlePages(dir) {
  const index = require(`${process.cwd()}/${dir}/index.json`);
  return Object.entries(index).reduce((toc, page) => {
    const [key, value] = page;
    const path = `${process.cwd()}/${dir}/${key}`;
    // Check if given page is valid
    if (!isDir(path) || isHidden(key)) {
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
    if (!hasIndex(path)) {
      log(`${key} needs an index.json file`);
      return toc;
    }
    // Process index.json
    const index = require(`${path}/index.json`);
    index.order.map(section => {
      const s = handleSection(`${path}/${section.route}`, section);
      if (s) pageContents.sections.push(s);
    });
    return { ...toc,
      [key]: pageContents
    };
  }, {});
}

function handleBlogPosts(dir, sortFn) {
  const path = `${process.cwd()}/${dir}`;
  const files = fs.readdirSync(path);
  return files
    .map(file => {
      const filePath = `${path}/${file}`;
      return handleFile(filePath, file);
    })
    .sort(sortFn);
}

module.exports = Builder;