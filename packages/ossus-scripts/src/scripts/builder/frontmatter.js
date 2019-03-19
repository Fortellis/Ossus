const { readFile } = require('../../utils/fsUtils');

function parseFrontMatter(fm) {
  let data = {};
  let matches;
  const re2 = /([^\n]+):\s{1}([^\n]+)\n/g;

  while ((matches = re2.exec(fm)) !== null) {
    data[matches[1]] = matches[2];
  }
  return data;
}

function extractFrontmatter(path) {
  const md = readFile(path);
  const re = /---\n((([^\n]+:)\s{1}[^\n]+\n)+)---/;
  const res = re.exec(md);
  if (!res) {
    return null;
  }
  return parseFrontMatter(res[1]);
}

module.exports = {
  extractFrontmatter,
  parseFrontMatter
};